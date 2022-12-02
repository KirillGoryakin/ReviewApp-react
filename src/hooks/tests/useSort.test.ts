import { renderHook } from '@testing-library/react';
import * as reactRouterDom from 'react-router-dom';
import { useSort } from 'hooks/useSort';
import { URLSearchParams } from 'url';
import { Review } from 'appTypes';

const mockReview: Review = {
  id: 0,
  title: '',
  body: '',
  date: '',
  folder: '',
  imageUrl: '',
  score: 0,
  tags: []
};

jest.mock('react-router-dom');

describe('useSort setSortMode', () => {
  it('should set sort mode', () => {
    const searchParams = new URLSearchParams('?someOtherParam=123');
    const setSearchParams = jest.fn();

    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      searchParams,
      setSearchParams
    ]);

    const { result } = renderHook(useSort);

    result.current.setSortMode('newest');
    expect(searchParams.get('sort')).toEqual('newest');
    expect(searchParams.get('someOtherParam')).toEqual('123');
    expect(setSearchParams).toBeCalledTimes(1);

    result.current.setSortMode('highest-score');
    expect(searchParams.get('sort')).toEqual('highest-score');
    expect(searchParams.get('someOtherParam')).toEqual('123');
    expect(setSearchParams).toBeCalledTimes(2);

    result.current.setSortMode(undefined);
    expect(searchParams.has('sort')).toBeFalsy();
    expect(searchParams.get('someOtherParam')).toEqual('123');
    expect(setSearchParams).toBeCalledTimes(3);
  });
});

describe('useSort sort', () => {
  it('should sort by newest', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?sort=newest'),
      jest.fn()
    ]);

    const { result } = renderHook(useSort);

    const reviews = [
      { ...mockReview, date: new Date('01.01.2000').toISOString() },
      { ...mockReview, date: new Date('01.02.2000').toISOString() },
      { ...mockReview, date: new Date('01.03.2000').toISOString() },
      { ...mockReview, date: new Date('01.04.2000').toISOString() },
      { ...mockReview, date: new Date('01.05.2000').toISOString() },
    ];

    const sorted = result.current.sort(reviews);

    expect(sorted).toEqual(reviews.reverse());
  });

  it('should sort by oldest', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?sort=oldest'),
      jest.fn()
    ]);

    const { result } = renderHook(useSort);

    const reviews = [
      { ...mockReview, date: new Date('01.05.2000').toISOString() },
      { ...mockReview, date: new Date('01.04.2000').toISOString() },
      { ...mockReview, date: new Date('01.03.2000').toISOString() },
      { ...mockReview, date: new Date('01.02.2000').toISOString() },
      { ...mockReview, date: new Date('01.01.2000').toISOString() },
    ];

    const sorted = result.current.sort(reviews);

    expect(sorted).toEqual(reviews.reverse());
  });

  it('should sort by a-to-z', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?sort=a-to-z'),
      jest.fn()
    ]);

    const { result } = renderHook(useSort);

    const reviews = [
      { ...mockReview, title: 'Zootopia' },
      { ...mockReview, title: 'Megamind' },
      { ...mockReview, title: 'Grass touching' },
      { ...mockReview, title: 'Banana phone' },
      { ...mockReview, title: 'Apple macbook' },
    ];

    const sorted = result.current.sort(reviews);

    expect(sorted).toEqual(reviews.reverse());
  });

  it('should sort by z-to-a', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?sort=z-to-a'),
      jest.fn()
    ]);

    const { result } = renderHook(useSort);

    const reviews = [
      { ...mockReview, title: 'Apple macbook' },
      { ...mockReview, title: 'Banana phone' },
      { ...mockReview, title: 'Grass touching' },
      { ...mockReview, title: 'Megamind' },
      { ...mockReview, title: 'Zootopia' },
    ];

    const sorted = result.current.sort(reviews);

    expect(sorted).toEqual(reviews.reverse());
  });

  it('should sort by highest-score', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?sort=highest-score'),
      jest.fn()
    ]);

    const { result } = renderHook(useSort);

    const reviews = [
      { ...mockReview, score: 1 },
      { ...mockReview, score: 5 },
      { ...mockReview, score: 7 },
      { ...mockReview, score: 65 },
      { ...mockReview, score: 999 },
    ];

    const sorted = result.current.sort(reviews);

    expect(sorted).toEqual(reviews.reverse());
  });

  it('should sort by lowest-score', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams('?sort=lowest-score'),
      jest.fn()
    ]);

    const { result } = renderHook(useSort);

    const reviews = [
      { ...mockReview, score: 999 },
      { ...mockReview, score: 65 },
      { ...mockReview, score: 7 },
      { ...mockReview, score: 5 },
      { ...mockReview, score: 1 },
    ];

    const sorted = result.current.sort(reviews);

    expect(sorted).toEqual(reviews.reverse());
  });

  it('should sort by default sort mode (newest)', () => {
    jest.spyOn(reactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams(),
      jest.fn()
    ]);

    const { result } = renderHook(useSort);

    const reviews = [
      { ...mockReview, date: new Date('01.01.2000').toISOString() },
      { ...mockReview, date: new Date('01.02.2000').toISOString() },
      { ...mockReview, date: new Date('01.03.2000').toISOString() },
      { ...mockReview, date: new Date('01.04.2000').toISOString() },
      { ...mockReview, date: new Date('01.05.2000').toISOString() },
    ];

    const sorted = result.current.sort(reviews);

    expect(sorted).toEqual(reviews.reverse());
  });
});

export {};