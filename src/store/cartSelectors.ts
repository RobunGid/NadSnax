import { RootState } from '.';

export const selectAllProducts = (state: RootState) => {
	return state.cart.productList;
};
