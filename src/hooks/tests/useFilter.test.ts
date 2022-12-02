import { renderHook } from '@testing-library/react';
import * as reactRouterDom from 'react-router-dom';
import { useFilter } from 'hooks/useFilter';
import { URLSearchParams } from 'url';
import { Review } from 'appTypes';

const mockReview: Review = {
  id: 0,
  title: '',
  body: '',
  date: new Date().toISOString(),
  folder: '',
  imageUrl: 'MyImageUrl',
  score: 5,
  tags: []
};

jest.mock('react-router-dom');

describe('useFilter filter params', () => {
  it('should return filter params', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?s=Test+search&someOtherParam=123&tags=My+Tag%2CAnother+Tag'),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    expect(result.current.filterParams).toEqual({
      s: 'Test search',
      folder: 'All',
      tags: ['My Tag', 'Another Tag']
    });
  });
});

describe('useFilter change filter params', () => {
  it('should change filter params', () => {
    const searchParams = new URLSearchParams('?s=Test+search&someOtherParam=123&tags=My+Tag%2CAnother+Tag');
    const setSearchParams = jest.fn();

    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      searchParams,
      setSearchParams
    ]);

    const { result } = renderHook(useFilter);

    result.current.setFilterParams(params => ({ ...params }));
    expect(searchParams.get('s')).toEqual('Test search');
    expect(searchParams.has('folder')).toBeFalsy();
    expect(searchParams.get('tags')).toEqual('My Tag,Another Tag');
    expect(searchParams.get('someOtherParam')).toEqual('123');
    expect(setSearchParams).toBeCalledTimes(1);

    result.current.setFilterParams(params => ({
      ...params,
      s: 'Other text',
      folder: 'My folder',
      tags: ['One tag']
    }));
    expect(searchParams.get('s')).toEqual('Other text');
    expect(searchParams.get('folder')).toEqual('My folder');
    expect(searchParams.get('tags')).toEqual('One tag');
    expect(searchParams.get('someOtherParam')).toEqual('123');
    expect(setSearchParams).toBeCalledTimes(2);

    result.current.setFilterParams(params => ({
      ...params,
      s: '',
      folder: 'All',
      tags: []
    }));

    expect(searchParams.has('s')).toBeFalsy();
    expect(searchParams.has('folder')).toBeFalsy();
    expect(searchParams.has('tags')).toBeFalsy();
    expect(searchParams.get('someOtherParam')).toEqual('123');
    expect(setSearchParams).toBeCalledTimes(3);
  });
});

describe('useFilter filter reviews by text', () => {
  it('should NOT filter reviews', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams(),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    const filtered = result.current.filter([
      { ...mockReview, title: 'Something' },
      { ...mockReview, title: 'my title' },
      { ...mockReview, title: 'My review' },
      { ...mockReview, title: 'Title' },
    ]);

    expect(filtered.length).toEqual(4);
  });

  it('should filter reviews by text', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?s=My+title'),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    const filtered = result.current.filter([
      { ...mockReview, title: 'Something' },
      { ...mockReview, title: 'my title' },
      { ...mockReview, title: 'My review' },
      { ...mockReview, title: 'Title' },
    ]);

    expect(filtered.length).toEqual(1);
  });

  it('should filter reviews by text', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?s=title'),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    const filtered = result.current.filter([
      { ...mockReview, title: 'Something' },
      { ...mockReview, title: 'my title' },
      { ...mockReview, title: 'My review' },
      { ...mockReview, title: 'Title' },
    ]);

    expect(filtered.length).toEqual(2);
  });

  it('should filter reviews by text', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?s=impossible'),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    const filtered = result.current.filter([
      { ...mockReview, title: 'Something' },
      { ...mockReview, title: 'my title' },
      { ...mockReview, title: 'My review' },
      { ...mockReview, title: 'Title' },
    ]);

    expect(filtered.length).toEqual(0);
  });
});

describe('useFilter filter reviews by folder', () => {
  it('should NOT filter reviews by folder', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams(),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    const filtered = result.current.filter([
      { ...mockReview, folder: 'Something' },
      { ...mockReview, folder: 'My folder' },
      { ...mockReview, folder: 'Another folder' },
    ]);

    expect(filtered.length).toEqual(3);
  });

  it('should filter reviews by folder', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?folder=My+Folder'),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    const filtered = result.current.filter([
      { ...mockReview, folder: 'Something' },
      { ...mockReview, folder: 'My folder' },
      { ...mockReview, folder: 'My+Folder' },
      { ...mockReview, folder: 'My Folder' },
      { ...mockReview, folder: 'MyFolder' },
      { ...mockReview, folder: 'My Folder' },
    ]);

    expect(filtered.length).toEqual(2);
  });

  it('should filter reviews by folder', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?folder=impossible'),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    const filtered = result.current.filter([
      { ...mockReview, folder: 'Something' },
      { ...mockReview, folder: 'My folder' },
      { ...mockReview, folder: 'Another folder' },
    ]);

    expect(filtered.length).toEqual(0);
  });
});

describe('useFilter filter reviews by tags', () => {
  it('should NOT filter reviews by tags', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams(),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    const filtered = result.current.filter([
      { ...mockReview, tags: ['Some tag'] },
      { ...mockReview, tags: ['Some tag', 'Another tag'] },
      { ...mockReview, tags: ['Taggy tag'] },
      { ...mockReview, tags: [] },
    ]);

    expect(filtered.length).toEqual(4);
  });

  it('should filter reviews by tags', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?tags=Some+tag'),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    const filtered = result.current.filter([
      { ...mockReview, tags: ['Some tag'] },
      { ...mockReview, tags: ['Some tag', 'Another tag'] },
      { ...mockReview, tags: ['Taggy tag'] },
      { ...mockReview, tags: [] },
    ]);

    expect(filtered.length).toEqual(2);
  });

  it('should filter reviews by tags', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?tags=Some+tag%2CAnother+tag'),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    const filtered = result.current.filter([
      { ...mockReview, tags: ['Some tag'] },
      { ...mockReview, tags: ['Some tag', 'Another tag'] },
      { ...mockReview, tags: ['Taggy tag'] },
      { ...mockReview, tags: [] },
    ]);

    expect(filtered.length).toEqual(1);
  });

  it('should filter reviews by tags', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?tags=Some+tag%2Cimpossible'),
      jest.fn()
    ]);

    const { result } = renderHook(useFilter);

    const filtered = result.current.filter([
      { ...mockReview, tags: ['Some tag'] },
      { ...mockReview, tags: ['Some tag', 'Another tag'] },
      { ...mockReview, tags: ['Taggy tag'] },
      { ...mockReview, tags: [] },
    ]);

    expect(filtered.length).toEqual(0);
  });
});

export {};