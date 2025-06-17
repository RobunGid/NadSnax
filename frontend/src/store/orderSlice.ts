import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Order, StoreError } from '../types';
import { RootStore, Status } from './types';
import camelcaseKeys from 'camelcase-keys';
import { Axios } from '../api';
import { isAxiosError } from 'axios';

type OrderState = {
	orders: Order[];
	status: Status;
	error: StoreError;
};

const initialState: OrderState = {
	orders: [],
	status: 'init',
	error: {},
};

type fetchSelfOrdersParams = {
	includeUser?: boolean;
	includeItems?: boolean;
};

export const fetchSelfOrders = createAsyncThunk<
	Order[],
	fetchSelfOrdersParams,
	{ rejectValue: StoreError; state: RootStore }
>(
	'order/fetchOrders',
	async ({ includeUser, includeItems }, { rejectWithValue, getState }) => {
		const accessToken = getState().auth.accessToken;
		try {
			const response = await Axios.get<Order[]>('/orders/self', {
				params: {
					include_user: includeUser,
					include_items: includeItems,
				},
				headers: {
					Authorization: accessToken ? `Bearer ${accessToken}` : '',
				},
			});

			const orders = response.data;

			const camelCaseOrders: Order[] = camelcaseKeys(orders, { deep: true });

			const fixedOrders = camelCaseOrders.map((order) => ({
				...order,

				items: order.items.map((orderItem) => ({
					...orderItem,
					item: {
						...orderItem.item,
						images: orderItem.item.images.map((image) => ({
							...image,
							url:
								import.meta.env.VITE_API_URL +
								'/resources/images/' +
								image.fileName +
								'.png',
						})),
					},
				})),
			}));

			return fixedOrders;
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
			state.status = 'loading';
		});
		builder.addCase(fetchSelfOrders.fulfilled, (state, action) => {
			state.status = 'success';
			state.orders = action.payload;
		});
		builder.addCase(fetchSelfOrders.rejected, (state, action) => {
			state.status = 'error';
			state.error = action.payload ? action.payload : { message: 'Unknown error' };
		});
	},
});

export const { reducer: orderReducer, actions: orderActions } = slice;
