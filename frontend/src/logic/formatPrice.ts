import { LanguageCodes } from '../types';

const intlEnFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
});

const intlRuFormatter = new Intl.NumberFormat('ru-RU', {
	style: 'currency',
	currency: 'RUB',
	minimumFractionDigits: 2,
});

export const formatPrice = (price: number, lang: LanguageCodes = 'en'): string => {
	if (lang == 'ru') return intlRuFormatter.format(price);
	if (lang == 'en') return intlEnFormatter.format(price);
	return intlEnFormatter.format(price);
};
