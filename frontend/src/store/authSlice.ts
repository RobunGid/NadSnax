import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Axios } from '../api';
import { AppDispatch, Status } from './types';
import { userActions } from './userSlice';
import { StoreError, User } from '../types';
import { isAxiosError } from 'axios';

type AuthState = {
	accessToken: string;
	status: Status;
	error: StoreError;
};

const initialState: AuthState = {
	accessToken: '',
	status: 'init',
	error: {},
};

export const loginThunk = createAsyncThunk<
	{ accessToken: string },
	{ username: string; password: string },
	{ rejectValue: StoreError }
>('auth/login', async ({ username, password }, { rejectWithValue }) => {
	try {
		const response = await Axios.post<{
			accessToken: string;
			refreshToken: string;
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

		return { accessToken: data.accessToken };
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

export const registerThunk = createAsyncThunk<
	undefined,
	Omit<User, 'id' | 'avatarUrl'> & { password: string; avatarFile?: File },
	{ dispatch: AppDispatch; rejectValue: StoreError }
>(
	'auth/register',
	async (
		{ username, password, firstName, lastName, role, avatarFile },
		{ dispatch, rejectWithValue }
	) => {
		try {
			const formData = new FormData();
			formData.append('username', username);
			formData.append('password', password);
			formData.append('firstName', firstName);
			formData.append('lastName', lastName);
			formData.append('role', role);
			if (avatarFile) formData.append('avatar', avatarFile);
			const response = await Axios.post('/register', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			const data = response.data;

			if (data && response.status === 201) {
				await dispatch(loginThunk({ username, password }));
			} else {
				return rejectWithValue(response.data);
			}
			return;
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

export const refreshThunk = createAsyncThunk<
	string,
	undefined,
	{ dispatch: AppDispatch; rejectValue: StoreError }
>('auth/refresh', async (_, { rejectWithValue }) => {
	try {
		const response = await Axios.post('/refresh');

		const accessToken = response.data.accessToken;
		return accessToken;
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

export const signoutThunk = createAsyncThunk(
	'auth/signout',
	async (_, { rejectWithValue, dispatch }) => {
		try {
			const accessResponse = await Axios.post(
				import.meta.env.VITE_API_URL + '/refresh'
			);

			const accessToken = accessResponse.data.accessToken;
			const response = await Axios.post(
				import.meta.env.VITE_API_URL + '/signout',
				{},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);

			if (response.status != 200) {
				return rejectWithValue(response.statusText);
			}
			dispatch(clearTokens());
			dispatch(userActions.clearUser());
			return;
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
			state.error = action.payload ? action.payload : {};
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
			state.error = action.payload ? action.payload : {};
		});

		builder.addCase(refreshThunk.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(refreshThunk.fulfilled, (state, action) => {
			state.status = 'success';
			state.accessToken = action.payload;
		});
		builder.addCase(refreshThunk.rejected, (state, action) => {
			state.status = 'error';
			state.error = action.payload ? action.payload : {};
		});

		builder.addCase(signoutThunk.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(signoutThunk.fulfilled, (state) => {
			state.status = 'success';
		});
		builder.addCase(signoutThunk.rejected, (state, action) => {
			state.status = 'error';
			state.error = action.payload ? action.payload : {};
		});
	},
});

export const {
	reducer: authReducer,
	actions: { setAccessToken, clearTokens },
} = slice;
