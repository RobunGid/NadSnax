import { RootState } from '.';
import { ProductId } from '../types';

export const selectAllItems = (state: RootState) => {
	return state.cart.productList;
};

export const selectItemById = (state: RootState, id: ProductId) => {
	return state.cart.productList.find((item) => item.product.id === id);
};
