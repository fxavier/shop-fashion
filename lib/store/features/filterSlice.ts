import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  sortBy: string;
  searchQuery: string;
}

const initialState: FilterState = {
  categories: [],
  priceRange: [0, 1000],
  brands: [],
  sortBy: 'newest',
  searchQuery: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setBrands: (state, action: PayloadAction<string[]>) => {
      state.brands = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearFilters: (state) => {
      state.categories = [];
      state.priceRange = [0, 1000];
      state.brands = [];
      state.sortBy = 'newest';
      state.searchQuery = '';
    },
  },
});

export const {
  setCategories,
  setPriceRange,
  setBrands,
  setSortBy,
  setSearchQuery,
  clearFilters,
} = filterSlice.actions;
export default filterSlice.reducer;