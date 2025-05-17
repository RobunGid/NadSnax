import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { StoreError, User } from '../types';
import { AppDispatch, RootStore, Status } from './types';
import { Axios } from '../api';
import camelcaseKeys from 'camelcase-keys';
import { isAxiosError } from 'axios';

type UserState = {
	user: User | null;
	status: Status;
	error: StoreError;
};

const initialState: UserState = {
	user: null,
	status: 'init',
	error: {},
};

export const fetchUser = createAsyncThunk<
	User,
	undefined,
	{ rejectValue: StoreError; state: RootStore }
>('user/fetchUser', async (_, { rejectWithValue, getState }) => {
	try {
		const accessToken = getState().auth.accessToken;

		if (!accessToken) return rejectWithValue({ message: 'No access token' });
		const response = await Axios.get<User>('/user/me', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		});

		const user = response.data;
		const camelcaseUser = camelcaseKeys(user, { deep: true });
		return camelcaseUser;
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

export const updateUser = createAsyncThunk<
	User,
	Pick<User, 'firstName' | 'lastName' | 'username'>,
	{ rejectValue: StoreError; state: RootStore }
>('user/updateUser', async (userData, { getState, rejectWithValue, dispatch }) => {
	try {
		const accessToken = getState().auth.accessToken;

		const fixedUserData = {
			...(userData.firstName && { first_name: userData.firstName }),
			...(userData.lastName && { last_name: userData.lastName }),
			...(userData.username && { username: userData.username }),
		};

		if (!accessToken) return rejectWithValue({ message: 'No access token' });
		const response = await Axios.patch<User>('/user/me', fixedUserData, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		});

		const user = response.data;
		const camelcaseUser = camelcaseKeys(user, { deep: true });

		return camelcaseUser;
	} catch (error) {
		dispatch(fetchUser());
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
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		clearUser: (state) => {
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUser.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.status = 'success';
		});
		builder.addCase(fetchUser.rejected, (state) => {
			state.status = 'error';
		});

		builder.addCase(updateUser.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(updateUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.status = 'success';
		});
		builder.addCase(updateUser.rejected, (state) => {
			state.status = 'error';
		});
	},
});

export const clearUser = () => (dispatch: AppDispatch) => {
	dispatch({
		type: 'user/clearUser',
	});
};

export const { reducer: userReducer, actions: userActions } = slice;
