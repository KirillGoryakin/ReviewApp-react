import { createSlice } from '@reduxjs/toolkit';
import { Folder, Review, Tag } from 'appTypes';
import testReviews from './testReviews';

export interface ReviewsState {
  reviews: Review[],
  folders: Folder[],
  tags: Tag[]
};

const initialState: ReviewsState = {
  reviews: testReviews,
  folders: ['All', 'Watched', 'Watch later', 'Watching', 'Dropped', 'Delayed', 'I am a reaaaaaally long folder name'],
  tags: ['Films', 'Super Heroes', 'Spider man', 'Some tag', 'Loooooooooooooong tag', 'Iron Man', 'For tests']
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