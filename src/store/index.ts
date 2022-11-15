import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from './slices/reviewsSlice';
import searchSlice from './slices/searchSlice';

const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    search: searchSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;