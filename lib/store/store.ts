import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import wishlistReducer from './features/wishlistSlice';
import filterReducer from './features/filterSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;