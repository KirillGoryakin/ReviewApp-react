import { Review } from "appTypes";
import ReviewReducer, {
  addReview,
  changeLanguage,
  changeReviewFolder,
  editReview,
  newUserDialog,
  removeReview,
  ReviewsState
} from "../reviewsSlice";

const mockReview: Review = {
  id: 0,
  title: 'My title',
  body: 'My description',
  date: new Date().toISOString(),
  folder: 'My folder',
  imageUrl: 'MyImageUrl',
  score: 5,
  tags: ['Some tag 1', 'Another tag']
};

describe('ReviewsSlice', () => {
  it('should add new Review with "addReview" action', () => {
    const state: ReviewsState = {
      isNewUser: true,
      lang: 'en_us',
      reviews: []
    };
    const action = {
      type: addReview.type,
      payload: { ...mockReview, id: 924 }
    };

    const updatedState = ReviewReducer(state, action);
    expect(updatedState.reviews.length).toEqual(1);
    expect(updatedState.reviews[0]).toEqual({ ...mockReview, id: 0 });

    const result = ReviewReducer(updatedState, action);
    expect(result.reviews.length).toEqual(2);
    expect(result.reviews[0]).toEqual({ ...mockReview, id: 0 });
    expect(result.reviews[1]).toEqual({ ...mockReview, id: 1 });
  });

  it('should remove Review with "removeReview" action', () => {
    const state: ReviewsState = {
      isNewUser: true,
      lang: 'en_us',
      reviews: [
        { ...mockReview, id: 0, title: 'First' },
        { ...mockReview, id: 1, title: 'Second' },
        { ...mockReview, id: 2, title: 'Third' }
      ]
    };
    const action = { type: removeReview.type, payload: 1 };

    const result = ReviewReducer(state, action);
    expect(result.reviews.length).toEqual(2);
    expect(result.reviews[0]).toEqual({ ...mockReview, id: 0, title: 'First' });
    expect(result.reviews[1]).toEqual({ ...mockReview, id: 1, title: 'Third' });
  });

  it('should change Review with "editReview" action', () => {
    const state: ReviewsState = {
      isNewUser: true,
      lang: 'en_us',
      reviews: [
        { ...mockReview, id: 0, title: 'First' },
        { ...mockReview, id: 1, title: 'Second' },
        { ...mockReview, id: 2, title: 'Third' }
      ]
    };
    const action = {
      type: editReview.type,
      payload: { ...mockReview, id: 1, title: 'New Title', score: 2 }
    };

    const result = ReviewReducer(state, action);
    expect(result.reviews.length).toEqual(3);
    expect(result.reviews[0]).toEqual({ ...mockReview, id: 0, title: 'First' });
    expect(result.reviews[1]).toEqual({ ...mockReview, id: 1, title: 'New Title', score: 2 });
    expect(result.reviews[2]).toEqual({ ...mockReview, id: 2, title: 'Third' });
  });

  it('should change Review folder with "changeReviewFolder" action', () => {
    const state: ReviewsState = {
      isNewUser: true,
      lang: 'en_us',
      reviews: [
        { ...mockReview }
      ]
    };
    const action = {
      type: changeReviewFolder.type,
      payload: { id: 0, folder: 'New Folder' }
    };

    const result = ReviewReducer(state, action);
    expect(result.reviews.length).toEqual(1);
    expect(result.reviews[0]).toEqual({ ...mockReview, folder: 'New Folder' });
  });

  it('should NOT add dummy Reviews with "newUserDialog" action', () => {
    const state: ReviewsState = {
      isNewUser: true,
      lang: 'en_us',
      reviews: []
    };
    const action = {
      type: newUserDialog.type,
      payload: false
    };

    const result = ReviewReducer(state, action);
    expect(result.isNewUser).toEqual(false);
    expect(result.reviews.length).toEqual(0);
  });

  it('should add dummy Reviews with "newUserDialog" action', () => {
    const state: ReviewsState = {
      isNewUser: true,
      lang: 'en_us',
      reviews: []
    };
    const action = {
      type: newUserDialog.type,
      payload: true
    };

    const result = ReviewReducer(state, action);
    expect(result.isNewUser).toEqual(false);
    expect(result.reviews.length).toBeGreaterThan(0);
  });

  it('should change language with "changeLanguage" action', () => {
    const state: ReviewsState = {
      isNewUser: true,
      lang: 'en_us',
      reviews: []
    };
    const action = {
      type: changeLanguage.type,
      payload: 'ru_ru'
    };

    const result = ReviewReducer(state, action);
    expect(result.lang).toEqual('ru_ru');
  });
});

export {};