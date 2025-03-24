import { RootState } from '.';

export const selectAllItemsFromCart = (state: RootState) => {
	return state.cart.productList;
};

export const selectItemFromCartById = (state: RootState, id?: string) => {
	if (!id) return undefined;
	return state.cart.productList.find((cartItem) => cartItem.item.id === id);
};
