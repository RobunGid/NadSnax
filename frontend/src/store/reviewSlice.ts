import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LanguageCodes, Review, StoreError } from '../types';
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
	lang?: LanguageCodes;
};

export const fetchSelfReviews = createAsyncThunk<
	Review[],
	fetchSelfReviewsParams,
	{ rejectValue: StoreError; state: RootStore }
>('review/fetchReviews', async ({ lang }, { rejectWithValue, getState }) => {
	const accessToken = getState().auth.accessToken;
	try {
		const response = await Axios.get<Review[]>('/review/self', {
			params: {
				lang,
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

type fetchRandomReviewsParams = {
	lang?: LanguageCodes;
	count: number;
};

export const fetchRandomReviews = createAsyncThunk<
	Review[],
	fetchRandomReviewsParams,
	{ rejectValue: StoreError; state: RootStore }
>('review/fetchReviews', async ({ lang, count }, { rejectWithValue, getState }) => {
	const accessToken = getState().auth.accessToken;
	try {
		const response = await Axios.get<Review[]>('/review', {
			params: {
				lang,
				random: true,
				per_page: count,
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
