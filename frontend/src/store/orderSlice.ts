import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LanguageCodes, Order, StoreError } from '../types';
import { RootStore, Status } from './types';
import camelcaseKeys from 'camelcase-keys';
import { Axios } from '../api';
import { isAxiosError } from 'axios';

type OrderState = {
	orders: Order[];
	status: { fetchSelfOrders: Status; createOrder: Status };
	error: StoreError;
};

const initialState: OrderState = {
	orders: [],
	status: { createOrder: 'init', fetchSelfOrders: 'init' },
	error: {},
};

type fetchSelfOrdersParams = {
	lang?: LanguageCodes;
};

export const fetchSelfOrders = createAsyncThunk<
	Order[],
	fetchSelfOrdersParams,
	{ rejectValue: StoreError; state: RootStore }
>('order/fetchOrders', async ({ lang }, { rejectWithValue, getState }) => {
	const accessToken = getState().auth.accessToken;

	try {
		const response = await Axios.get<Order[]>('/orders/self', {
			params: {
				lang,
			},
			headers: {
				Authorization: accessToken ? `Bearer ${accessToken}` : '',
			},
		});

		const orders = response.data;

		const camelCaseOrders: Order[] = camelcaseKeys(orders, { deep: true });

		return camelCaseOrders;
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

interface createOrderThunkParams {
	orderItems: {
		quantity: number;
		item_id: string;
	}[];
	pickupPoint: string;
}

export const createOrderThunk = createAsyncThunk<
	Order,
	createOrderThunkParams,
	{ state: RootStore; rejectValue: StoreError }
>(
	'/orders/create',
	async ({ orderItems, pickupPoint }, { getState, rejectWithValue }) => {
		try {
			const accessToken = getState().auth.accessToken;
			const response = await Axios.post(
				'/orders',
				{ pickup_point: pickupPoint, items: orderItems },
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'Content-Type': 'application/json',
					},
				}
			);
			const data = response.data;
			return data;
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
	}
);

const slice = createSlice({
	name: 'order',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchSelfOrders.pending, (state) => {
			state.status.fetchSelfOrders = 'loading';
		});
		builder.addCase(fetchSelfOrders.fulfilled, (state, action) => {
			state.status.fetchSelfOrders = 'success';
			state.orders = action.payload;
		});
		builder.addCase(fetchSelfOrders.rejected, (state, action) => {
			state.status.fetchSelfOrders = 'error';
			state.error = action.payload ? action.payload : { message: 'Unknown error' };
		});

		builder.addCase(createOrderThunk.pending, (state) => {
			state.status.fetchSelfOrders = 'loading';
		});
		builder.addCase(createOrderThunk.fulfilled, (state, action) => {
			state.status.fetchSelfOrders = 'success';
			state.orders.push(action.payload);
		});
		builder.addCase(createOrderThunk.rejected, (state, action) => {
			state.status.fetchSelfOrders = 'error';
			state.error = action.payload ? action.payload : { message: 'Unknown error' };
		});
	},
});

export const { reducer: orderReducer, actions: orderActions } = slice;
