import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Folder, Review } from 'appTypes';
import testReviews from './testReviews';

export interface ReviewsState {
  reviews: Review[],
};

const initialState: ReviewsState = {
  reviews: testReviews
};

const reviewsSlice = createSlice({
  name: 'reviewsState',
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<Review>){
      const id = state.reviews.length;
      const title = action.payload.title.trim();
      const body = action.payload.body.trim();

      const review = {
        ...action.payload,
        id,
        title,
        body
      };
      state.reviews.push(review);
    },
    removeReview(state, action: PayloadAction<number>){
      state.reviews = state.reviews.filter(({id}) => id !== action.payload);
      state.reviews = state.reviews.map((review, index) => ({...review, id: index}));
    },
    editReview(state, action: PayloadAction<Review>) {
      state.reviews = state.reviews.map(review =>
        (review.id === action.payload.id)
        ? { ...action.payload }
        : review
      );
    },
    changeReviewFolder(state, action: PayloadAction<{id: number, folder: Folder}>){
      const review = state.reviews.find(({id}) => id === action.payload.id);
      if(review) review.folder = action.payload.folder;
    }
  },
});

export const {
  addReview,
  removeReview,
  editReview,
  changeReviewFolder,
} = reviewsSlice.actions; 
export default reviewsSlice.reducer;