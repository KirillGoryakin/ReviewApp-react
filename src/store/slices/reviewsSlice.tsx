import { createSlice } from '@reduxjs/toolkit';
import { Folder, Review, Tag } from 'appTypes';
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
    addPost(){},
    removePost(){}
  },
});

export const {addPost, removePost} = reviewsSlice.actions; 
export default reviewsSlice.reducer;