
import { configureStore } from '@reduxjs/toolkit'
// import navbarReducer from './slices/navbar';
import bestseller from './slices/bestseller';

const reducer = {
    // navbar: navbarReducer,
    bestSeller: bestseller
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;