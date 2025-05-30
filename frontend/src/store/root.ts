import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import { categoryReducer } from './categorySlice';
import { itemReducer } from './itemSlice';
import { userReducer } from './userSlice';
import { authReducer } from './authSlice';
import { reviewReducer } from './reviewSlice';
import { orderReducer } from './orderSlice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		category: categoryReducer,
		item: itemReducer,
		user: userReducer,
		auth: authReducer,
		review: reviewReducer,
		order: orderReducer,
	},
});
