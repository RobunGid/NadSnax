import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { Axios } from '../api';
import { Status } from './types';

type AuthState = {
	accessToken: string;
	refreshToken: string;
	status: Status;
	error: SerializedError;
};

const initialState: AuthState = {
	accessToken: '',
	refreshToken: '',
	status: 'init',
	error: {},
};

export const loginThunk = createAsyncThunk(
	'auth/login',
	async ({ username, password }: { username: string; password: string }) => {
		const response = await Axios.post<{
			access_token: string;
			refresh_token: string;
		}>(
			'/login',
			{ username, password },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const data = response.data;

		if (data.access_token) {
			return { accessToken: data.access_token };
		}
		throw new Error('Failed to login');
	}
);

export const refreshThunk = createAsyncThunk('auth/refresh', async () => {
	const response = await Axios.post<{ access_token: string }>('/login', {
		headers: {
			'Content-Type': 'apllication/json',
			credentials: 'include',
		},
	});
	const data = response.data;

	if (data.access_token) {
		return { accessToken: data.access_token };
	}
	throw new Error('Failed to login');
});

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		setRefreshToken: (state, action) => {
			state.refreshToken = action.payload;
		},
		clearTokens: (state) => {
			state.accessToken = '';
			state.refreshToken = '';
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginThunk.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(loginThunk.fulfilled, (state, action) => {
			state.status = 'success';
			state.accessToken = action.payload.accessToken;
		});
		builder.addCase(loginThunk.rejected, (state, action) => {
			state.status = 'error';
			state.error = action.error;
		});

		builder.addCase(refreshThunk.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(refreshThunk.fulfilled, (state, action) => {
			state.status = 'success';
			state.accessToken = action.payload.accessToken;
		});
		builder.addCase(refreshThunk.rejected, (state, action) => {
			state.status = 'error';
			state.error = action.error;
		});
	},
});

export const { reducer: authReducer, actions: authActions } = slice;
