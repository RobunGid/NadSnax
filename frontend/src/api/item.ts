import axios from 'axios';

export const itemAxios = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});
