import axios, { AxiosRequestConfig } from 'axios';
import { Item } from './types';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { AppDispatch } from './store';

export const Axios = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true,
});

export const fetchSimillarItems = async (item: Item, parameters?: AxiosRequestConfig) =>
	Axios.get<Item[]>('/item', { params: { simillar_id: item.id, ...parameters } });

interface HandleAddToFavoriteParams {
	accessToken: string;
	itemId: string;
	addItemToFavorite: ActionCreatorWithPayload<string, 'item/addItemToFavorite'>;
	dispatch: AppDispatch;
}

export const handleAddToFavorite = async ({
	accessToken,
	itemId,
	addItemToFavorite,
	dispatch,
}: HandleAddToFavoriteParams) => {
	const response = await Axios.post(
		'/favorite',
		{
			item_id: itemId,
		},
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);
	if (response.status === 201) {
		dispatch(addItemToFavorite(itemId));
	}
};

interface HandleDeleteItemFromFavoriteParams {
	accessToken: string;
	favoriteId: string;
	deleteItemFromFavorite: ActionCreatorWithPayload<
		string,
		'item/deleteItemFromFavorite'
	>;
	dispatch: AppDispatch;
}

export const handleDeleteItemFromFavorite = async ({
	accessToken,
	favoriteId,
	deleteItemFromFavorite,
	dispatch,
}: HandleDeleteItemFromFavoriteParams) => {
	const response = await Axios.delete(`/favorite/${favoriteId}`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	if (response.status === 200) {
		dispatch(deleteItemFromFavorite(favoriteId));
	}
};
