import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Item } from '../types';
import camelcaseKeys from 'camelcase-keys';
import { itemAxios } from '../api/item';

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

interface fetchItemsParams {
	include_type?: boolean;
	include_category?: boolean;
	include_item_details?: boolean;
	category_name?: string;
	type_name?: string;
	is_bestseller?: boolean;
	is_secretbox?: boolean;
}

export const fetchItems = createAsyncThunk<
	Item[],
	fetchItemsParams,
	{ rejectValue: string }
>(
	'item/fetchItems',
	async (
		{
			include_type,
			include_category,
			include_item_details,
			category_name,
			type_name,
			is_bestseller,
			is_secretbox,
		},
		{ rejectWithValue }
	) => {
		category_name = category_name !== 'best-sellers' ? category_name : undefined;
		category_name = category_name !== 'secretboxes' ? category_name : undefined;
		const response = await itemAxios.get<Item[]>('/item', {
			params: {
				include_type,
				include_category,
				include_item_details,
				category_name,
				type_name,
				bestseller: is_bestseller,
				secretbox: is_secretbox,
			},
		});

		if (response.status != 200) {
			return rejectWithValue('Server Error!');
		}

		const items = response.data;

		const camelCaseItems = camelcaseKeys(items, { deep: true });

		const fixedItems = camelCaseItems.map((item: Item) => ({
			...item,
			imageUrl: `http://localhost${item.imageUrl}`,
			pageLink: `${item.type.pageLink}${item.pageLink}`,
		}));

		return fixedItems;
	}
);

const itemsSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchItems.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchItems.fulfilled, (state, action) => {
			state.list = action.payload;
			state.loading = false;
		});
	},
});

export default itemsSlice.reducer;
