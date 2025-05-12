import axios, { AxiosRequestConfig } from 'axios';
import { Item } from './types';
import { ActionCreator } from '@reduxjs/toolkit';

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
}

export const handleAddToFavorite = async ({
	accessToken,
	fetchItems,
	itemId,
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
		fetchItems({
			include_item_details: true,
			include_reviews: true,
			include_category: true,
			include_type: true,
			include_images: true,
			simillar_id: itemId,
			accessToken,
		});
	}
};

interface HandleDeleteFromFavoriteParams {
	accessToken: string;
	fetchItems: ActionCreator<unknown, unknown[]>;
	favoriteId: string;
	itemId: string;
}

export const handleDeleteFromFavorite = async ({
	accessToken,
	fetchItems,
	favoriteId,
	itemId,
}: HandleDeleteFromFavoriteParams) => {
	const response = await Axios.delete(`/favorite/${favoriteId}`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	if (response.status === 200) {
		fetchItems({
			include_item_details: true,
			include_reviews: true,
			include_category: true,
			include_type: true,
			include_images: true,
			simillar_id: itemId,
			accessToken,
		});
	}
};
