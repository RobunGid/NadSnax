import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootStore } from './types';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useActionCreators = <A extends ActionCreatorsMapObject>(actions: A): A => {
	const dispatch = useAppDispatch();

	return useMemo(() => bindActionCreators(actions, dispatch), []);
};

export const useStateSelector: TypedUseSelectorHook<RootStore> = useSelector;
