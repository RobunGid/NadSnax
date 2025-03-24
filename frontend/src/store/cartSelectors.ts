import { RootState } from '.';

export const selectAllItems = (state: RootState) => {
	return state.cart.productList;
};

export const selectItemById = (state: RootState, id: string) => {
	return state.cart.productList.find((cartItem) => cartItem.item.id === id);
};
