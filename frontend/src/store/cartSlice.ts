import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType, Item } from '../types';
import { AppDispatch } from '.';
import { Status } from './types';

interface CartState {
	productList: CartItemType[];
	status: Status;
}

const initialState: CartState = {
	productList: [],
	status: 'init',
};

const slice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart(state, action: PayloadAction<{ item: Item }>) {
			const existingCartProductIndex = state.productList.findIndex(
				(cartItem) => cartItem.item.id === action.payload.item.id
			);

			if (existingCartProductIndex !== -1) {
				const existingCartProduct = state.productList[existingCartProductIndex];

				if (existingCartProduct && existingCartProduct.count) {
					existingCartProduct.count = Math.min(++existingCartProduct.count, 16);
				}
			}

			if (existingCartProductIndex === -1) {
				state.productList.push({ item: action.payload.item, count: 1 });
			}
		},
		removeItemFromCart(state, action: PayloadAction<{ item: Item }>) {
			const existingCartProductIndex = state.productList.findIndex(
				(cartItem) => cartItem.item.id === action.payload.item.id
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
		deleteItemFromCart(state, action: PayloadAction<{ item: Item }>) {
			const existingCartProductIndex = state.productList.findIndex(
				(cartItem) => cartItem.item.id === action.payload.item.id
			);

			if (existingCartProductIndex === -1) return;

			state.productList.splice(existingCartProductIndex, 1);
		},
		changeItemCount(state, action: PayloadAction<{ item: Item; count: number }>) {
			const validatedCount = Math.min(action.payload.count, 16);

			const existingCartProductIndex = state.productList.findIndex(
				(cartItem) => cartItem.item.id === action.payload.item.id
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
						item: action.payload.item,
						count: 1,
					});
				} else {
					state.productList.push({
						item: action.payload.item,
						count: validatedCount,
					});
				}
			}
		},
	},
});

export const { reducer: cartReducer, actions: cartActions } = slice;

export const addItemToCart = (item?: Item) => (dispatch: AppDispatch) => {
	dispatch({
		type: 'cart/addItemToCart',
		payload: { item },
	});
};

export const deleteItemFromCart = (item?: Item) => (dispatch: AppDispatch) => {
	dispatch({
		type: 'cart/deleteItemFromCart',
		payload: { item },
	});
};

export const changeItemCount =
	(item: Item | undefined, count: number) => (dispatch: AppDispatch) => {
		dispatch({
			type: 'cart/changeItemCount',
			payload: { item, count },
		});
	};

export const removeItemFromCart = (item?: Item) => (dispatch: AppDispatch) => {
	dispatch({
		type: 'cart/removeItemFromCart',
		payload: { item },
	});
};
