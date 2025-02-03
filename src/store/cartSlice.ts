import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';
import { products } from '../mock';
import { AppDispatch } from '.';

const getRandomNumber = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min) + min);

const getRandomId = () => {
	const randomId = getRandomNumber(0, products.length - 1);
	return randomId.toString().padStart(4, '0');
};

const randomIds = [getRandomId(), getRandomId(), getRandomId()];

const randomProducts = products.filter((product) => randomIds.includes(product.id));

const initialState = {
	productList: randomProducts.map((product) => ({ product, count: 1 })),
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart(state, action: PayloadAction<{ product: Product }>) {
			const existingCartProductIndex = state.productList.findIndex(
				(item) => item.product.id === action.payload.product.id
			);

			if (existingCartProductIndex !== -1) {
				const existingCartProduct = state.productList[existingCartProductIndex];

				if (existingCartProduct && existingCartProduct.count) {
					Math.min(++existingCartProduct.count, 16);
				}
			}

			if (existingCartProductIndex === -1) {
				state.productList.push({ product: action.payload.product, count: 1 });
			}
		},
		changeProductCount(
			state,
			action: PayloadAction<{ product: Product; count: number }>
		) {
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

export const addProductToCart = (product: Product) => (dispatch: AppDispatch) => {
	dispatch({
		type: 'cart/addProductToCart',
		payload: { product },
	});
};

export const changeProductCount =
	(product: Product, count: number) => (dispatch: AppDispatch) => {
		dispatch({
			type: 'cart/changeProductCount',
			payload: { product, count },
		});
	};
