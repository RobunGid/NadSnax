import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Item } from '../types';
import camelcaseKeys from 'camelcase-keys';
import { Status } from './types';
import { Axios } from '../api';

type ItemsState = {
	itemList: Item[];
	status: Status;
};

const initialState: ItemsState = {
	itemList: [],
	status: 'init',
};

interface fetchItemsParams {
	include_type?: boolean;
	include_category?: boolean;
	include_item_details?: boolean;
	category_name?: string;
	type_name?: string;
	page_link?: string;
	is_bestseller?: boolean;
	is_secretbox?: boolean;
	include_images?: boolean;
	include_reviews?: boolean;
	simillar_id?: string;
}

export const fetchItemsThunk = createAsyncThunk<
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
			include_images,
			include_reviews,
			category_name,
			type_name,
			page_link,
			is_bestseller,
			is_secretbox,
			simillar_id,
		},
		{ rejectWithValue }
	) => {
		category_name = category_name !== 'best-sellers' ? category_name : undefined;
		category_name = category_name !== 'secretboxes' ? category_name : undefined;
		const response = await Axios.get<Item[]>('/item', {
			params: {
				include_type,
				include_category,
				include_item_details,
				include_images,
				category_name,
				type_name,
				page_link,
				bestseller: is_bestseller,
				secretbox: is_secretbox,
				include_reviews,
				simillar_id,
			},
		});

		if (response.status != 200) {
			return rejectWithValue('Server Error!');
		}

		const items = response.data;

		const camelCaseItems: Item[] = camelcaseKeys(items, { deep: true });

		const fixedItems: Item[] = camelCaseItems.map((item) => ({
			...item,

			images: item.images.map((image) => ({
				...image,
				url:
					import.meta.env.VITE_API_URL +
					'/resources/images/' +
					image.fileName +
					'.png',
			})),
		}));
		return fixedItems;
	}
);

const slice = createSlice({
	name: 'item',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchItemsThunk.pending, (state) => {
			state.itemList = [];
			state.status = 'loading';
		});
		builder.addCase(fetchItemsThunk.fulfilled, (state, action) => {
			state.itemList = action.payload;
			state.status = 'success';
		});
	},
});

export const { reducer: itemReducer, actions: itemActions } = slice;
