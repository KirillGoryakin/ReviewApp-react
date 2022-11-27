import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Folder, Review } from 'appTypes';
import dummyReviews from 'assets/dummyReviews';

export interface ReviewsState {
  isNewUser: boolean,
  lang: string,
  reviews: Review[],
};

const initialState: ReviewsState = {
  isNewUser: true,
  lang: navigator.language.replace('-', '_').toLowerCase() || "en_us",
  reviews: []
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
    },
    newUserDialog(state, action: PayloadAction<boolean>){
      state.isNewUser = false;
      if (action.payload)
        state.reviews = dummyReviews;
    },
    changeLanguage(state, action: PayloadAction<string>) {
      state.lang = action.payload;
    }
  },
});

export const {
  addReview,
  removeReview,
  editReview,
  changeReviewFolder,
  newUserDialog,
  changeLanguage,
} = reviewsSlice.actions; 
export default reviewsSlice.reducer;