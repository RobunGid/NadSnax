import { RootState } from '.';

export const selectAllCategories = (state: RootState) => {
	return state.category.categoryList;
};
