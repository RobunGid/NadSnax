import { RootState } from '.';
import { ProductId } from '../types';

export const selectAllProducts = (state: RootState) => {
	return state.cart.productList;
};

export const selectProductById = (state: RootState, id: ProductId) => {
	return state.cart.productList.find((item) => item.product.id === id);
};
