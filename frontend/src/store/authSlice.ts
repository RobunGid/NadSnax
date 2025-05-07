import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { Axios } from '../api';
import { Status } from './types';
import { fetchUser, userActions } from './userSlice';
import { User } from '../types';
import { AxiosError } from 'axios';

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

export const registerThunk = createAsyncThunk(
	'auth/register',
	async (
		{
			username,
			password,
			firstName,
			lastName,
			role,
		}: Omit<User, 'id'> & { password: string },
		{ dispatch, rejectWithValue }
	) => {
		try {
			const formData = new FormData();
			formData.append('username', username);
			formData.append('password', password);
			formData.append('first_name', firstName);
			formData.append('last_name', lastName);
			formData.append('role', role);
			const response = await Axios.post('/register', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					credentials: 'include',
				},
				withCredentials: true,
			});
			const data = response.data;

			if (data && response.status === 201) {
				dispatch(loginThunk({ username, password }));
			} else {
				return rejectWithValue(response.data);
			}
		} catch (error) {
			if (error instanceof AxiosError)
				return rejectWithValue(
					error.response ? error.response.data : error.message
				);
		}
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
		builder.addCase(registerThunk.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(registerThunk.fulfilled, (state) => {
			state.status = 'success';
		});
		builder.addCase(registerThunk.rejected, (state, action) => {
			state.status = 'error';
			if (action.payload) {
				state.error = action.payload;
			} else {
				state.error = action.error;
			}
		});

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
