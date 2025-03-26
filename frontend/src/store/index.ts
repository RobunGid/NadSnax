import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cartReducer } from './cartSlice';
import { categoryReducer } from './categorySlice';
import { itemReducer } from './itemSlice';

export * from './cartSlice';
export * from './itemSlice';
export * from './categorySlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		category: categoryReducer,
		item: itemReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
