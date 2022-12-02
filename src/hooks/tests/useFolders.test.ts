import { renderHook } from '@testing-library/react';
import { Review } from 'appTypes';
import * as appHooks from 'hooks/app';
import { useFolders } from 'hooks/useFolders';

jest.mock('hooks/app');

const mockReview: Review = {
  id: 0,
  title: 'My title',
  body: 'My description',
  date: new Date().toISOString(),
  folder: '',
  imageUrl: 'MyImageUrl',
  score: 5,
  tags: ['Some tag 1', 'Another tag']
};

describe('useFolders', () => {
  it('should return default folders', () => {
    const { result } = renderHook(() => useFolders('defaultFolders'));

    expect(result.current.length).toEqual(5);
  });

  it('should return user folders', () => {
    jest.spyOn(appHooks, 'useAppSelector').mockReturnValue([
      { ...mockReview, folder: 'My folder'},
      { ...mockReview, folder: 'Folder one' },
      { ...mockReview, folder: 'Another folder' }
    ]);

    const { result } = renderHook(() => useFolders('userFolders'));

    expect(result.current.length).toEqual(3);
    expect(result.current).toEqual([
      'My folder',
      'Folder one',
      'Another folder'
    ]);
  });

  it('should return user and default folders', () => {
    jest.spyOn(appHooks, 'useAppSelector').mockReturnValue([
      { ...mockReview, folder: 'My folder' },
      { ...mockReview, folder: 'Folder one' },
      { ...mockReview, folder: 'Another folder' }
    ]);

    const { result } = renderHook(useFolders);

    expect(result.current.length).toEqual(8);
    expect(result.current[5]).toEqual('My folder');
    expect(result.current[6]).toEqual('Folder one');
    expect(result.current[7]).toEqual('Another folder');
  });
});

export {};