import {
	I18N,
	createPluralize,
	useTranslate as useTranslateBase,
	useI18N as useI18nBase,
} from '@ayub-begimkulov/i18n';
import { Axios } from '../api';
import { getDefaultLang } from '../logic/getDefaultLang';
import { Keyset } from '../types';

const pluralizeEn = createPluralize('en');
const pluralizeRu = createPluralize('ru');

const loadEn = async () => {
	const keyset = await Axios.get<Keyset>('/keyset/en');
	return keyset.data;
};

const loadRu = async () => {
	const keyset = await Axios.get<Keyset>('/keyset/ru');
	return keyset.data;
};

export const i18n = new I18N({
	defaultLang: getDefaultLang(),
	languages: {
		en: {
			keyset: loadEn,
			pluralize: pluralizeEn,
		},
		ru: {
			keyset: loadRu,
			pluralize: pluralizeRu,
		},
	},
});

export const useTranslate = useTranslateBase<typeof i18n>;
export const useI18n = useI18nBase<typeof i18n>;
