import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		category: categoryReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
