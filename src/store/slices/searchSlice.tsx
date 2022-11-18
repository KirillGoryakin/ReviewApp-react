import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Folder, Sort, Tag } from 'appTypes';

export interface SearchState {
  search: string,
  folder: Folder,
  tags: Tag[],
  sort: Sort,
};

const initialState: SearchState = {
  search: '',
  folder: 'All',
  tags: [],
  sort: undefined,
};

const searchState = createSlice({
  name: 'searchState',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSearchFolder(state, action: PayloadAction<Folder>) {
      state.folder = action.payload;
    },
    setSearchTags(state, action: PayloadAction<Tag[]>){
      state.tags = action.payload;
    },
    addSearchTag(state, action: PayloadAction<Tag>) {
      state.tags.push(action.payload);
    },
    removeSearchTag(state, action: PayloadAction<Tag>) {
      state.tags = state.tags.filter(tag => tag !== action.payload);
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
  },
});

export const {
  setSearchText,
  setSearchFolder,
  setSearchTags,
  addSearchTag,
  removeSearchTag,
  setSort,
} = searchState.actions; 
export default searchState.reducer;