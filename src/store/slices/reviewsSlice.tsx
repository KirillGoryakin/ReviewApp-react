import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Review } from 'appTypes';
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
      state.reviews.push({...action.payload, id});
    },
    removeReview(state, action: PayloadAction<number>){
      state.reviews = state.reviews.filter(({id}) => id !== action.payload);
      state.reviews = state.reviews.map((review, index) => ({...review, id: index}));
    }
  },
});

export const { addReview, removeReview } = reviewsSlice.actions; 
export default reviewsSlice.reducer;