import axios, { AxiosRequestConfig } from 'axios';
import { Item } from './types';

export const Axios = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

export const fetchSimillarItems = async (item: Item, parameters?: AxiosRequestConfig) =>
	Axios.get<Item[]>('/item', { params: { simillar_id: item.id, ...parameters } });
