import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../types';
import { AppDispatch } from '.';

const initialState: { productList: { product: Item; count: number }[] } = {
	productList: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart(state, action: PayloadAction<{ product: Item }>) {
			const existingCartProductIndex = state.productList.findIndex(
				(item) => item.product.id === action.payload.product.id
			);

			if (existingCartProductIndex !== -1) {
				const existingCartProduct = state.productList[existingCartProductIndex];

				if (existingCartProduct && existingCartProduct.count) {
					existingCartProduct.count = Math.min(++existingCartProduct.count, 16);
				}
			}

			if (existingCartProductIndex === -1) {
				state.productList.push({ product: action.payload.product, count: 1 });
			}
		},
		removeItemFromCart(state, action: PayloadAction<{ product: Item }>) {
			const existingCartProductIndex = state.productList.findIndex(
				(item) => item.product.id === action.payload.product.id
			);

			if (existingCartProductIndex !== -1) {
				const existingCartProduct = state.productList[existingCartProductIndex];

				if (existingCartProduct && existingCartProduct.count) {
					if (existingCartProduct.count >= 2) {
						existingCartProduct.count = --existingCartProduct.count;
					} else {
						state.productList.splice(existingCartProductIndex, 1);
					}
				}
			}
		},
		deleteItemFromCart(state, action: PayloadAction<{ product: Item }>) {
			const existingCartProductIndex = state.productList.findIndex(
				(item) => item.product.id === action.payload.product.id
			);

			if (existingCartProductIndex === -1) return;

			state.productList.splice(existingCartProductIndex, 1);
		},
		changeItemCount(state, action: PayloadAction<{ product: Item; count: number }>) {
			const validatedCount = Math.min(action.payload.count, 16);

			const existingCartProductIndex = state.productList.findIndex(
				(item) => item.product.id === action.payload.product.id
			);
			if (existingCartProductIndex !== -1) {
				const existingCartProduct = state.productList[existingCartProductIndex];

				if (validatedCount < 1) {
					if (existingCartProduct && existingCartProduct.count) {
						existingCartProduct.count = 1;
					}
				} else {
					if (existingCartProduct && existingCartProduct.count) {
						existingCartProduct.count = validatedCount;
					}
				}
			}

			if (existingCartProductIndex === -1) {
				if (validatedCount < 1) {
					state.productList.push({
						product: action.payload.product,
						count: 1,
					});
				} else {
					state.productList.push({
						product: action.payload.product,
						count: validatedCount,
					});
				}
			}
		},
	},
});

export default cartSlice.reducer;

export const addItemToCart = (product?: Item) => (dispatch: AppDispatch) => {
	dispatch({
		type: 'cart/addItemToCart',
		payload: { product },
	});
};

export const deleteItemFromCart = (product?: Item) => (dispatch: AppDispatch) => {
	dispatch({
		type: 'cart/deleteItemFromCart',
		payload: { product },
	});
};

export const changeItemCount =
	(product: Item | undefined, count: number) => (dispatch: AppDispatch) => {
		dispatch({
			type: 'cart/changeItemCount',
			payload: { product, count },
		});
	};

export const removeItemFromCart = (product?: Item) => (dispatch: AppDispatch) => {
	dispatch({
		type: 'cart/removeItemFromCart',
		payload: { product },
	});
};
