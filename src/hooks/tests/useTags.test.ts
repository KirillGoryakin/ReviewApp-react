import { renderHook } from '@testing-library/react';
import { Review } from 'appTypes';
import * as appHooks from 'hooks/app';
import { useTags } from 'hooks/useTags';

jest.mock('hooks/app');

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

describe('useTags', () => {
  it('should return user folders', () => {
    jest.spyOn(appHooks, 'useAppSelector').mockReturnValue([
      { ...mockReview, tags: ['Tag', 'Other tag', 'Third tag'] },
      { ...mockReview, tags: ['Tag', 'Fourth tag'] },
      { ...mockReview, tags: ['Fourth tag'] }
    ]);

    const { result } = renderHook(useTags);

    expect(result.current.length).toEqual(4);
    expect(result.current).toEqual([
      'Tag',
      'Other tag',
      'Third tag',
      'Fourth tag'
    ]);
  });
});

export {};