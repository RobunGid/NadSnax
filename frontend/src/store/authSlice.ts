import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { Axios } from '../api';
import { Status } from './types';
import { fetchUser, userActions } from './userSlice';

type AuthState = {
	accessToken: string;
	status: Status;
	error: SerializedError;
};

const initialState: AuthState = {
	accessToken: '',
	status: 'init',
	error: {},
};

export const loginThunk = createAsyncThunk(
	'auth/login',
	async (
		{ username, password }: { username: string; password: string },
		{ dispatch }
	) => {
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
			dispatch(fetchUser(data.access_token));
			return { accessToken: data.access_token };
		}
		throw new Error('Failed to login');
	}
);

export const refreshThunk = createAsyncThunk(
	'auth/refresh',
	async (_, { rejectWithValue, dispatch }) => {
		try {
			const response = await fetch(import.meta.env.VITE_API_URL + '/refresh', {
				method: 'POST',
				credentials: 'include',
			});
			if (response.status != 200) {
				return rejectWithValue(response.statusText);
			}

			const data = await response.json();
			const accessToken = data.access_token;
			dispatch(fetchUser(accessToken));
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const signoutThunk = createAsyncThunk(
	'auth/signout',
	async (_, { rejectWithValue, dispatch }) => {
		const response = await fetch(import.meta.env.VITE_API_URL + '/signout', {
			method: 'POST',
		});

		if (response.status != 200) {
			return rejectWithValue(response.statusText);
		}
		dispatch(authActions.clearTokens());
		dispatch(userActions.clearUser());
	}
);

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		clearTokens: (state) => {
			state.accessToken = '';
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

		builder.addCase(signoutThunk.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(signoutThunk.fulfilled, (state) => {
			state.status = 'success';
		});
		builder.addCase(signoutThunk.rejected, (state) => {
			state.status = 'error';
		});
	},
});

export const { reducer: authReducer, actions: authActions } = slice;
