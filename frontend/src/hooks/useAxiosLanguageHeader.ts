import { useEffect } from 'react';
import { useI18n } from '../i18n/i18n';
import { Axios } from '../api';

export const useAxiosLanguageHeader = () => {
	const { lang } = useI18n();

	useEffect(() => {
		Axios.defaults.headers.common['Accept-Language'] = lang;
	}, [lang]);
};
