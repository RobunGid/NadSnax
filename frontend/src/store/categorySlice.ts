import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ItemCategory } from '../types';
import camelcaseKeys from 'camelcase-keys';
import { categoryAxios } from '../api/category';

type CategoryState = {
	categoryList: ItemCategory[];
	status: 'init' | 'loading' | 'error' | 'success';
};

const initialState: CategoryState = {
	categoryList: [],
	status: 'init',
};

export const fetchCategories = createAsyncThunk<
	ItemCategory[],
	undefined,
	{ rejectValue: string }
>('category/fetchCategories', async (_, { rejectWithValue }) => {
	const response = await categoryAxios.get<ItemCategory[]>('/category', {
		params: { include_types: true },
	});

	if (response.status != 200) {
		return rejectWithValue('Server Error!');
	}

	const categories = response.data;

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

const slice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.categoryList = action.payload;
			state.status = 'success';
		});
	},
});

export const { reducer: categoryReducer, actions: categoryActions } = slice;
