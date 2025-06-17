import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Item } from '../types';
import camelcaseKeys from 'camelcase-keys';
import { RootStore, Status } from './types';
import { Axios } from '../api';

type ItemsState = {
	itemList: Item[];
	status: Status;
};

const initialState: ItemsState = {
	itemList: [],
	status: 'init',
};

interface addFavoriteThunkParams {
	itemId: string;
}

export const addFavoriteThunk = createAsyncThunk<
	{ favoriteId: string; itemId: string },
	addFavoriteThunkParams,
	{ state: RootStore }
>('item/addFavorite', async ({ itemId }, { getState }) => {
	const accessToken = getState().auth.accessToken;
	const response = await Axios.post<{ id: string }>(
		'/favorite',
		{ item_id: itemId },
		{
			headers: {
				Authorization: accessToken ? `Bearer ${accessToken}` : '',
			},
		}
	);
	const favoriteId = response.data.id;
	return { favoriteId, itemId };
});

interface deleteFavoriteThunkParams {
	favoriteId: string;
}

export const deleteFavoriteThunk = createAsyncThunk<
	string,
	deleteFavoriteThunkParams,
	{ state: RootStore }
>('item/deleteFavorite', async ({ favoriteId }, { getState }) => {
	const accessToken = getState().auth.accessToken;
	await Axios.delete<{ id: string }>(`/favorite/${favoriteId}`, {
		headers: {
			Authorization: accessToken ? `Bearer ${accessToken}` : '',
		},
	});
	return favoriteId;
});

export interface fetchItemsParams {
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
	accessToken?: string;
	item_ids?: string[];
}

export const fetchItemsThunk = createAsyncThunk<
	Item[],
	fetchItemsParams,
	{ rejectValue: string; state: RootStore }
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
			item_ids,
		},
		{ rejectWithValue, getState }
	) => {
		category_name = category_name !== 'best-sellers' ? category_name : undefined;
		category_name = category_name !== 'secretboxes' ? category_name : undefined;
		const accessToken = getState().auth.accessToken;
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
				item_ids: item_ids?.join(','),
			},
			headers: {
				Authorization: accessToken ? `Bearer ${accessToken}` : '',
			},
		});

		if (response.status != 200) {
			return rejectWithValue('Server Error!');
		}

		const items = response.data;

		const camelCaseItems: Item[] = camelcaseKeys(items, { deep: true });

		return camelCaseItems;
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
		builder.addCase(addFavoriteThunk.fulfilled, (state, action) => {
			const item = state.itemList.find((item) => item.id === action.payload.itemId);
			if (item) item.favoriteId = action.payload.favoriteId;
		});
		builder.addCase(deleteFavoriteThunk.fulfilled, (state, action) => {
			const item = state.itemList.find(
				(item) => item.favoriteId === action.payload
			);
			if (item) item.favoriteId = undefined;
		});
	},
});

export const { reducer: itemReducer, actions: itemActions } = slice;
