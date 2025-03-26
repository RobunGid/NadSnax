import { RootState } from '.';

export const selectAllItems = (state: RootState) => {
	return state.item.itemList;
};

export const selectItemById = (state: RootState, id?: string) => {
	if (!id) return undefined;
	return state.item.itemList.find((item) => item.id == id);
};

export const selectItemByPageLink = (state: RootState, pageLink?: string) => {
	if (!pageLink) return undefined;
	return state.item.itemList.find((item) => item.pageLink == pageLink);
};
