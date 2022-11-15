import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Folder, Tag } from './reviewsSlice';

type Sort =
  'newest' | 'oldest'
  | 'a-to-z' | 'z-to-a'
  | 'highest-score' | 'lowest-score'
  | undefined;

export interface SearchState {
  folder: Folder,
  tags: Tag[],
  sort: Sort,
};

const initialState: SearchState = {
  folder: 'All',
  tags: [],
  sort: undefined,
};

const searchState = createSlice({
  name: 'searchState',
  initialState,
  reducers: {
    addSearchTag(state, action: PayloadAction<Tag>){
      state.tags.push(action.payload);
    },
    removeSearchTag(state, action: PayloadAction<Tag>) {
      state.tags = state.tags.filter(tag => tag !== action.payload);
    },
  },
});

export const { addSearchTag, removeSearchTag } = searchState.actions; 
export default searchState.reducer;