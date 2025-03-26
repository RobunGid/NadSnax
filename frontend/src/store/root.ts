import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import { categoryReducer } from './categorySlice';
import { itemReducer } from './itemSlice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		category: categoryReducer,
		item: itemReducer,
	},
});
