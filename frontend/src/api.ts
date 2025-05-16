import axios, { AxiosRequestConfig } from 'axios';
import { Item } from './types';
import { ActionCreator } from '@reduxjs/toolkit';
import { fetchItemsParams } from './store';

export const Axios = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true,
});

export const fetchSimillarItems = async (item: Item, parameters?: AxiosRequestConfig) =>
	Axios.get<Item[]>('/item', { params: { simillar_id: item.id, ...parameters } });

interface HandleAddToFavoriteParams {
	accessToken: string;
	fetchItems: ActionCreator<unknown, unknown[]>;
	itemId: string;
	params: fetchItemsParams;
}

export const handleAddToFavorite = async ({
	accessToken,
	fetchItems,
	itemId,
	params,
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
		fetchItems(params);
	}
};

interface HandleDeleteFromFavoriteParams {
	accessToken: string;
	fetchItems: ActionCreator<unknown, unknown[]>;
	favoriteId: string;
	params: fetchItemsParams;
}

export const handleDeleteFromFavorite = async ({
	accessToken,
	fetchItems,
	favoriteId,
	params,
}: HandleDeleteFromFavoriteParams) => {
	const response = await Axios.delete(`/favorite/${favoriteId}`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	if (response.status === 200) {
		fetchItems(params);
	}
};
