import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Item, ItemCategory } from '../types';
import camelcaseKeys from 'camelcase-keys';

type ItemsState = {
	list: Item[];
	error: null | string;
	loading: boolean;
};

const initialState: ItemsState = {
	list: [],
	error: null,
	loading: false,
};

export const fetchCategories = createAsyncThunk<
	Item[],
	undefined,
	{ rejectValue: string }
>('category/fetchItems', async (_, { rejectWithValue }) => {
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
