import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Review, StoreError } from '../types';
import { RootStore, Status } from './types';
import camelcaseKeys from 'camelcase-keys';
import { Axios } from '../api';
import { isAxiosError } from 'axios';

type ReviewState = {
	reviews: Review[];
	status: Status;
	error: StoreError;
};

const initialState: ReviewState = {
	reviews: [],
	status: 'init',
	error: {},
};

type fetchSelfReviewsParams = {
	includeUser?: boolean;
};

export const fetchSelfReviews = createAsyncThunk<
	Review[],
	fetchSelfReviewsParams,
	{ rejectValue: StoreError; state: RootStore }
>('item/fetchItems', async ({ includeUser }, { rejectWithValue, getState }) => {
	const accessToken = getState().auth.accessToken;
	try {
		const response = await Axios.get<Review[]>('/review/self', {
			params: {
				include_user: includeUser,
			},
			headers: {
				Authorization: accessToken ? `Bearer ${accessToken}` : '',
			},
		});

		const reviews = response.data;

		const camelCaseReviews: Review[] = camelcaseKeys(reviews, { deep: true });

		return camelCaseReviews;
	} catch (error) {
		if (isAxiosError(error)) {
			return rejectWithValue({
				message: error.message,
				code: error.code,
				status: error.response?.status,
				data: error.response?.data,
			});
		}
		return rejectWithValue({ message: 'Unknown error' });
	}
});

const slice = createSlice({
	name: 'review',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchSelfReviews.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchSelfReviews.fulfilled, (state, action) => {
			state.status = 'success';
			state.reviews = action.payload;
		});
		builder.addCase(fetchSelfReviews.rejected, (state, action) => {
			state.status = 'error';
			state.error = action.payload ? action.payload : { message: 'Unknown error' };
		});
	},
});

export const { reducer: reviewReducer, actions: reviewActions } = slice;
