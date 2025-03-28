import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import { categoryReducer } from './categorySlice';
import { itemReducer } from './itemSlice';
import { userReducer } from './userSlice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		category: categoryReducer,
		item: itemReducer,
		user: userReducer,
	},
});
