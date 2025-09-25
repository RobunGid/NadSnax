import {
	ActionCreatorsMapObject,
	AsyncThunk,
	bindActionCreators,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootStore } from './types';

type BoundActions<Actions extends ActionCreatorsMapObject> = {
	[Key in keyof Actions]: Actions[Key] extends AsyncThunk<
		infer Returned,
		infer ThunkArg,
		infer _ // eslint-disable-line @typescript-eslint/no-unused-vars
	>
		? BoundAsyncThunk<Returned, ThunkArg>
		: Actions[Key];
};

type BoundAsyncThunk<Returned, ThunkArg> = (
	...args: ThunkArg extends void ? [] : [ThunkArg]
) => Promise<Returned>;

export const useAppDispatch = useDispatch<AppDispatch>;

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(
	actions: Actions
): BoundActions<Actions> => {
	const dispatch = useAppDispatch();
	return useMemo(
		() => bindActionCreators(actions, dispatch) as BoundActions<Actions>,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[dispatch]
	);
};

export const useStateSelector: TypedUseSelectorHook<RootStore> = useSelector;
