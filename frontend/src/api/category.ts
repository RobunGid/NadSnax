import axios from 'axios';

export const categoryAxios = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});
