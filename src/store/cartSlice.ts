import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';
import { products } from '../mock';

const getRandomNumber = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min) + min);

const getRandomId = () => {
	const randomId = getRandomNumber(0, products.length - 1);
	return randomId.toString().padStart(4, '0');
};

const randomIds = [getRandomId(), getRandomId(), getRandomId()];

const randomProducts = products.filter((product) => randomIds.includes(product.id));

const initialState = { productList: randomProducts };

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart(state, action: PayloadAction<{ product: Product }>) {
			const existingCartProductIndex = state.productList.findIndex(
				(product) => product.id === action.payload.product.id
			);
			if (existingCartProductIndex !== -1) {
				const existingCartProduct = state.productList[existingCartProductIndex];

				if (existingCartProduct && existingCartProduct.count) {
					existingCartProduct.count++;
				}
			}

			if (existingCartProductIndex === -1) {
				state.productList.push(action.payload.product);
			}
		},
	},
});

export default cartSlice.reducer;
