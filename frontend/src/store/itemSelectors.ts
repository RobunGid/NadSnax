import { RootState } from '.';

export const selectAllItems = (state: RootState) => {
	return state.item.list;
};
