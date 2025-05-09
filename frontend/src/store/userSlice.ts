import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../types';
import { AppDispatch, Status } from './types';
import { Axios } from '../api';
import camelcaseKeys from 'camelcase-keys';

type UserState = {
	user: User | null;
	status: Status;
};

const initialState: UserState = {
	user: null,
	status: 'init',
};

export const fetchUser = createAsyncThunk<User, string, { rejectValue: string }>(
	'user/fetchUser',
	async (accessToken, { rejectWithValue }) => {
		const response = await Axios.get<User>('/user/me', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		});

		if (response.status != 200) {
			return rejectWithValue('Server Error!');
		}

		const user = response.data;
		const camelcaseUser = camelcaseKeys(user, { deep: true });
		const userWithAvatarUrl = {
			...camelcaseUser,
			avatarUrl: import.meta.env.VITE_API_URL + '/avatar/' + user.username + '.png',
		};
		return userWithAvatarUrl;
	}
);

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
	},
});

export const clearUser = () => (dispatch: AppDispatch) => {
	dispatch({
		type: 'user/clearUser',
	});
};

export const { reducer: userReducer, actions: userActions } = slice;
