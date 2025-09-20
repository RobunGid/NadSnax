import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, LanguageCodes, Review } from '../types';
import camelcaseKeys from 'camelcase-keys';
import { RootStore, Status } from './types';
import { Axios } from '../api';

type ItemsState = {
	items: Item[];
	status: {
		fetchItems: Status;
		addFavorite: Status;
		deleteFavorite: Status;
		addReview: Status;
		deleteReview: Status;
	};
	currentItemPage: number;
	totalItems: number;
};

const initialState: ItemsState = {
	items: [],
	status: {
		fetchItems: 'init',
		addFavorite: 'init',
		deleteFavorite: 'init',
		addReview: 'init',
		deleteReview: 'init',
	},
	currentItemPage: 0,
	totalItems: 0,
};

interface addItemReviewThunkParams {
	review: Omit<Review, 'id' | 'user' | 'createdAt' | 'item' | 'userId'>;
}

export const addItemReviewThunk = createAsyncThunk<
	Review,
	addItemReviewThunkParams,
	{ state: RootStore }
>('item/addReview', async ({ review }, { getState }) => {
	const accessToken = getState().auth.accessToken;
	const response = await Axios.post(
		'/review',
		{
			text: review.text,
			rating: review.rating,
			itemId: review.itemId,
		},
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		}
	);
	const camelCaseReview = camelcaseKeys(response.data, { deep: true });
	return camelCaseReview;
});

interface deleteItemReviewThunkParams {
	reviewId: string;
	itemId: string;
}

interface deleteItemReviewThunkPesult {
	reviewId: string;
	itemId: string;
}

export const deleteItemReviewThunk = createAsyncThunk<
	deleteItemReviewThunkPesult,
	deleteItemReviewThunkParams,
	{ state: RootStore }
>('item/deleteReview', async ({ reviewId, itemId }, { getState }) => {
	const accessToken = getState().auth.accessToken;
	await Axios.delete(`/review/${reviewId}`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	return { reviewId, itemId };
});

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
		{ itemId: itemId },
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
	categoryName?: string;
	typeName?: string;
	name?: string;
	isBestseller?: boolean;
	isSecretbox?: boolean;
	simillarId?: string;
	accessToken?: string;
	itemIds?: string[];
	lang?: LanguageCodes;
	page?: number;
}

interface fetchItemsThunkResult {
	items: Item[];
	totalItems: number;
}

export const fetchItemsThunk = createAsyncThunk<
	fetchItemsThunkResult,
	fetchItemsParams,
	{ rejectValue: string; state: RootStore }
>(
	'item/fetchItems',
	async (
		{
			categoryName,
			typeName,
			name,
			isBestseller,
			isSecretbox,
			simillarId,
			itemIds,
			lang,
			page,
		},
		{ rejectWithValue, getState }
	) => {
		categoryName = categoryName !== 'best-sellers' ? categoryName : undefined;
		categoryName = categoryName !== 'secretboxes' ? categoryName : undefined;
		const accessToken = getState().auth.accessToken;
		const currentPage = page ?? getState().item.currentItemPage;
		const requestParams = {
			categoryName,
			typeName,
			name: name,
			bestseller: isBestseller,
			secretbox: isSecretbox,
			simillarId,
			itemIds: itemIds?.join(','),
			lang,
			page: currentPage,
			perPage: 10,
		};

		const response = await Axios.get('/item', {
			params: requestParams,
			headers: {
				Authorization: accessToken ? `Bearer ${accessToken}` : '',
			},
		});

		if (response.status != 200) {
			return rejectWithValue('Server Error!');
		}

		const items = response.data.items;
		const totalItems = response.data.totalItems;

		const camelCaseItems: Item[] = camelcaseKeys(items, { deep: true });
		return { items: camelCaseItems, totalItems };
	}
);

const slice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		setItemPage: (state, action: PayloadAction<number>) => {
			state.currentItemPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchItemsThunk.pending, (state) => {
			state.items = [];
			state.status.fetchItems = 'loading';
		});
		builder.addCase(fetchItemsThunk.fulfilled, (state, action) => {
			state.items = action.payload.items;
			state.totalItems = action.payload.totalItems;
			state.status.fetchItems = 'success';
		});
		builder.addCase(fetchItemsThunk.rejected, (state) => {
			state.status.fetchItems = 'error';
		});
		builder.addCase(addFavoriteThunk.fulfilled, (state, action) => {
			const item = state.items.find((item) => item.id === action.payload.itemId);
			if (item) item.favoriteId = action.payload.favoriteId;
		});
		builder.addCase(deleteFavoriteThunk.fulfilled, (state, action) => {
			const item = state.items.find((item) => item.favoriteId === action.payload);
			if (item) item.favoriteId = undefined;
		});
		builder.addCase(addFavoriteThunk.pending, (state) => {
			state.status.addFavorite = 'loading';
		});
		builder.addCase(deleteFavoriteThunk.pending, (state) => {
			state.status.addFavorite = 'loading';
		});
		builder.addCase(addFavoriteThunk.rejected, (state) => {
			state.status.addFavorite = 'error';
		});
		builder.addCase(deleteFavoriteThunk.rejected, (state) => {
			state.status.addFavorite = 'error';
		});
		builder.addCase(addItemReviewThunk.fulfilled, (state, action) => {
			const item = state.items.find((item) => item.id === action.payload.itemId);
			if (item) item.reviews.push(action.payload);
		});
		builder.addCase(addItemReviewThunk.pending, (state) => {
			state.status.addReview = 'loading';
		});
		builder.addCase(addItemReviewThunk.rejected, (state) => {
			state.status.addReview = 'error';
		});
		builder.addCase(deleteItemReviewThunk.fulfilled, (state, action) => {
			const item = state.items.find((item) => item.id === action.payload.itemId);
			const review =
				item &&
				item.reviews.find((review) => review.id === action.payload.reviewId);
			if (item && review) {
				item.reviews.splice(
					item.reviews.findIndex((rev) => rev === review),
					1
				);
			}
		});
		builder.addCase(deleteItemReviewThunk.pending, (state) => {
			state.status.addReview = 'loading';
		});
		builder.addCase(deleteItemReviewThunk.rejected, (state) => {
			state.status.addReview = 'error';
		});
	},
});

export const { reducer: itemReducer, actions: itemActions } = slice;
