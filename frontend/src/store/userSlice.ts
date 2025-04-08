import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../types';
import { userAxios } from '../api/user';
import { user } from '../mock';
import { Status } from './types';

type UserState = {
	user: User | null;
	status: Status;
};

const initialState: UserState = {
	user: null,
	status: 'init',
};

export const fetchUser = createAsyncThunk<User, undefined, { rejectValue: string }>(
	'user/fetchUser',
	async (_, { rejectWithValue }) => {
		// const response = await userAxios.get<User>('/user', {});

		// if (response.status != 200) {
		// 	return rejectWithValue('Server Error!');
		// }

		// const user = response.data;
		const us = await new Promise<typeof user>((resolve) =>
			setTimeout(() => resolve(user), 900)
		);
		return us;
	}
);

const slice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
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

export const { reducer: userReducer, actions: userActions } = slice;
