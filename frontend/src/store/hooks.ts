import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootStore } from './types';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useActionCreators = (actions: ActionCreatorsMapObject) => {
	const dispatch = useAppDispatch();

	return useMemo(() => bindActionCreators(actions, dispatch), []);
};

export const useStateSelector: TypedUseSelectorHook<RootStore> = useSelector;
