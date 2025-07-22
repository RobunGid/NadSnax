import { useEffect } from 'react';
import { useI18n } from '../i18n/i18n';
import { fetchCategories, useActionCreators } from '../store';

export const useInitCategories = () => {
	const { lang } = useI18n();
	const { fetchInitCategories } = useActionCreators({
		fetchInitCategories: fetchCategories,
	});

	useEffect(() => {
		fetchInitCategories({ lang });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lang]);
};
