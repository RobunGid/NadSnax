import axios from 'axios';
import { Item } from '../types';

export const itemAxios = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

export const fetchSimillarItems = async (
	item: Item,
	parameters?: Record<string, string | boolean>
) => itemAxios.get<Item[]>('/item', { params: { simillar_id: item.id, ...parameters } });
