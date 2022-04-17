
import { configureStore } from '@reduxjs/toolkit'

import auth from './slices/auth'; 
import bestseller from './slices/bestseller';
import cart from './slices/cart';

const reducer = {
    auth: auth, 
    cart: cart,
    bestSeller: bestseller
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;