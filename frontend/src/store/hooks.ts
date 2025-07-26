import {
	ActionCreatorsMapObject,
	AsyncThunk,
	bindActionCreators,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootStore } from './types';

type BoundActions<Actions extends ActionCreatorsMapObject> = {
	[key in keyof Actions]: Actions[key] extends AsyncThunk<unknown, unknown, any>
		? BoundAsyncThunk<Actions[key]>
		: Actions[key];
};

type BoundAsyncThunk<Thunk extends AsyncThunk<unknown, unknown, any>> = (
	...args: Parameters<Thunk>
) => Promise<ReturnType<ReturnType<Thunk>>>;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useActionCreators = <Actions extends ActionCreatorsMapObject>(
	actions: Actions
): BoundActions<Actions> => {
	const dispatch = useAppDispatch();
	return useMemo(() => bindActionCreators(actions, dispatch), []);
};

export const useStateSelector: TypedUseSelectorHook<RootStore> = useSelector;
