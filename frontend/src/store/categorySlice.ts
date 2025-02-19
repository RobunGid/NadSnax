import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ItemCategory } from '../types';
import camelcaseKeys from 'camelcase-keys';

type CategoriesState = {
	list: ItemCategory[];
	error: null | string;
	loading: boolean;
};

const initialState: CategoriesState = {
	list: [],
	error: null,
	loading: false,
};

export const fetchCategories = createAsyncThunk<
	ItemCategory[],
	undefined,
	{ rejectValue: string }
>('category/fetchCategories', async (_, { rejectWithValue }) => {
	const response = await fetch('/api/category?include_types=true');

	if (!response.ok) {
		return rejectWithValue('Server Error!');
	}

	const categories = await response.json();

	const camelCaseCategories = camelcaseKeys(categories, { deep: true });

	const fixedUrlCategories = camelCaseCategories.map((category: ItemCategory) => ({
		...category,
		iconUrl: `http://localhost${category.iconUrl}`,
		types: category.types.map((type) => ({
			...type,
			iconUrl: `http://localhost${type.iconUrl}`,
		})),
	}));

	return fixedUrlCategories;
});

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.list = action.payload;
			state.loading = false;
		});
	},
});

export default categorySlice.reducer;
