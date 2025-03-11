import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string, initialValue?: unknown) => {
	const [value, setValue] = useState<() => unknown>(() => {
		const jsonValue = localStorage.getItem(key);
		return jsonValue ? jsonValue : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
