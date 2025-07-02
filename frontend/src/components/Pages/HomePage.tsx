import { ReactNode } from 'react';
import { UIProductsPage } from './UI/UIProductsPage';
import { useTranslate } from '../../i18n/i18n';

export const HomePage = () => {
	const reviews: ReactNode[] = [];
	const translate = useTranslate();

	return <UIProductsPage customerReviews={reviews} translate={translate} />;
};
