import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import loadingSlice from './loadingSlice';

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    loading: loadingSlice,
  },
});