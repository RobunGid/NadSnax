import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Item } from '../types';
import camelcaseKeys from 'camelcase-keys';
import { RootStore, Status } from './types';
import { Axios } from '../api';

type ItemsState = {
	items: Item[];
	status: Status;
};

const initialState: ItemsState = {
	items: [],
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
	includeType?: boolean;
	includeCategory?: boolean;
	includeItemDetails?: boolean;
	categoryName?: string;
	typeName?: string;
	pageLink?: string;
	isBestseller?: boolean;
	isSecretbox?: boolean;
	includeImages?: boolean;
	includeReviews?: boolean;
	includeReviewsUser?: boolean;
	simillarId?: string;
	accessToken?: string;
	itemIds?: string[];
	includeFavorite?: boolean;
}

export const fetchItemsThunk = createAsyncThunk<
	Item[],
	fetchItemsParams,
	{ rejectValue: string; state: RootStore }
>(
	'item/fetchItems',
	async (
		{
			includeType,
			includeCategory,
			includeItemDetails,
			includeImages,
			includeReviews,
			categoryName,
			typeName,
			pageLink,
			isBestseller,
			isSecretbox,
			simillarId,
			itemIds,
			includeFavorite,
			includeReviewsUser,
		},
		{ rejectWithValue, getState }
	) => {
		categoryName = categoryName !== 'best-sellers' ? categoryName : undefined;
		categoryName = categoryName !== 'secretboxes' ? categoryName : undefined;
		const accessToken = getState().auth.accessToken;
		const response = await Axios.get<Item[]>('/item', {
			params: {
				include_type: includeType,
				include_category: includeCategory,
				include_item_details: includeItemDetails,
				include_images: includeImages,
				category_name: categoryName,
				type_name: typeName,
				page_link: pageLink,
				bestseller: isBestseller,
				secretbox: isSecretbox,
				include_reviews: includeReviews,
				include_reviews_user: includeReviewsUser,
				include_favorite: includeFavorite,
				simillar_id: simillarId,
				item_ids: itemIds?.join(','),
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
			state.items = [];
			state.status = 'loading';
		});
		builder.addCase(fetchItemsThunk.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		});
		builder.addCase(addFavoriteThunk.fulfilled, (state, action) => {
			const item = state.items.find((item) => item.id === action.payload.itemId);
			if (item) item.favoriteId = action.payload.favoriteId;
		});
		builder.addCase(deleteFavoriteThunk.fulfilled, (state, action) => {
			const item = state.items.find((item) => item.favoriteId === action.payload);
			if (item) item.favoriteId = undefined;
		});
	},
});

export const { reducer: itemReducer, actions: itemActions } = slice;
