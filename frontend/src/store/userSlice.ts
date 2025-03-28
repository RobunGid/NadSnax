import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../types';
import { userAxios } from '../api/user';

type UserState = {
	user: User | null;
	status: 'init' | 'loading' | 'error' | 'success';
};

const initialState: UserState = {
	user: null,
	status: 'init',
};

export const fetchUser = createAsyncThunk<User, undefined, { rejectValue: string }>(
	'category/fetchCategories',
	async (_, { rejectWithValue }) => {
		const response = await userAxios.get<User>('/user', {});

		if (response.status != 200) {
			return rejectWithValue('Server Error!');
		}

		const user = response.data;

		return user;
	}
);

const slice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export const { reducer: userReducer, actions: userActions } = slice;
