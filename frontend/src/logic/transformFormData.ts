import { LanguageCodes } from '../types';
import { languages } from './languages';

type ImageTranslation = {
	lang_key: LanguageCodes;
	title: string;
};

type Image = {
	is_main: boolean;
	title: string;
	name: string;
};

type Item = {
	label: string;
	name: string;
	description: string;
	price: number;
	old_price: number;
	is_bestseller: boolean;
	is_secretbox: boolean;
	category_id: string;
	type_id: string;
};

type ItemDetails = {
	full_label: string;
	full_description: string;
	ingridients: string;
	supplier: string;
	supplier_link: string;
	nutrition: string;
};

type Translation = {
	lang_key: LanguageCodes;
	label?: string;
	description?: string;
	full_label?: string;
	full_description?: string;
	ingridients?: string;
	supplier?: string;
	supplier_link?: string;
	nutrition?: string;
	price?: number;
	old_price?: number;
};

type ParsedForm = {
	item: Item;
	item_details: ItemDetails;
	item_translations: Translation[];
	item_details_translations: Translation[];
	item_images: Image[];
	item_images_translations: ImageTranslation[][];
	image_files: File[];
};
type RawFormData = {
	[key: string]: FormDataEntryValue;
};

const langs = languages.map((language) => language.key);

export const transformFormData = (formData: RawFormData): ParsedForm => {
	const item: Item = {
		label: '',
		name: '',
		description: '',
		price: 0,
		old_price: 0,
		is_bestseller: false,
		is_secretbox: false,
		category_id: '',
		type_id: '',
	};

	const item_details: ItemDetails = {
		full_label: '',
		full_description: '',
		ingridients: '',
		supplier: '',
		supplier_link: '',
		nutrition: '',
	};

	const itemTranslationsMap: Record<LanguageCodes, Translation> = {
		ru: { lang_key: 'ru' },
		en: { lang_key: 'en' },
	};
	const itemDetailsTranslationsMap: Record<LanguageCodes, Translation> = {
		ru: { lang_key: 'ru' },
		en: { lang_key: 'en' },
	};

	const imageGroups: Record<number, Image> = {};
	const imageTranslationsGroups: Record<number, ImageTranslation[]> = {};
	const imageFiles: File[] = [];

	for (const [key, value] of Object.entries(formData)) {
		if (key === 'item.isBestseller') item.is_bestseller = value.toString() === 'on';
		if (key === 'item.isSecretBox') item.is_secretbox = value.toString() === 'on';
		if (key === 'item.name') item.name = value.toString();
		if (key.startsWith('item.')) {
			const [, field, lang] = key.split(/[._]/);
			const v = value.toString();
			if (lang === 'en') {
				if (field === 'isBestseller') item.is_bestseller = v === 'on';
				if (field === 'isSecretbox') item.is_secretbox = v === 'on';
				if (field === 'label') item.label = v;

				if (field === 'description') item.description = v;
				if (field === 'price') item.price = parseFloat(v) || 0;
				if (field === 'oldPrice') item.old_price = parseFloat(v) || 0;
			} else if (langs.includes(lang as LanguageCodes)) {
				if (field === 'label')
					itemTranslationsMap[lang as LanguageCodes].label = v;
				if (field === 'description')
					itemTranslationsMap[lang as LanguageCodes].description = v;
				if (field === 'price')
					itemTranslationsMap[lang as LanguageCodes].price = parseFloat(v) || 0;
				if (field === 'old_price')
					itemTranslationsMap[lang as LanguageCodes].old_price =
						parseFloat(v) || 0;
			}
		}

		if (key.startsWith('details.')) {
			const [, field, lang] = key.split(/[._]/);
			const v = value.toString();
			if (lang === 'en') {
				if (field === 'fullDisplayedName') item_details.full_label = v;
				if (field === 'fullDescription') item_details.full_description = v;
				if (field === 'ingridients') item_details.ingridients = v;
				if (field === 'supplier') item_details.supplier = v;
				if (field === 'supplierLink') item_details.supplier_link = v;
				if (field === 'nutritionalValue') item_details.nutrition = v;
			} else if (langs.includes(lang as LanguageCodes)) {
				if (field === 'fullDisplayedName')
					itemDetailsTranslationsMap[lang as LanguageCodes].full_label = v;
				if (field === 'fullDescription')
					itemDetailsTranslationsMap[lang as LanguageCodes].full_description =
						v;
				if (field === 'ingridients')
					itemDetailsTranslationsMap[lang as LanguageCodes].ingridients = v;
				if (field === 'supplier')
					itemDetailsTranslationsMap[lang as LanguageCodes].supplier = v;
				if (field === 'supplierLink')
					itemDetailsTranslationsMap[lang as LanguageCodes].supplier_link = v;
				if (field === 'nutritionalValue')
					itemDetailsTranslationsMap[lang as LanguageCodes].nutrition = v;
			}
		}

		if (key.startsWith('images.')) {
			const [, field, indexRaw, lang] = key.split(/[_.]/);
			const index = parseInt(indexRaw) - 1;
			const v = value.toString();

			if (!imageGroups[index])
				imageGroups[index] = { title: '', is_main: index === 0, name: '' };
			if (!imageTranslationsGroups[index]) imageTranslationsGroups[index] = [];

			if (field === 'title') {
				if (lang === 'en') imageGroups[index].title = v;
				else
					imageTranslationsGroups[index].push({
						lang_key: lang as LanguageCodes,
						title: v,
					});
			}
			if (field === 'name') imageGroups[index].name = v;
			if (field === 'file' && value instanceof File) imageFiles.push(value);
		}

		if (key === 'item.category') item.category_id = value.toString();
		if (key === 'item.type') item.type_id = value.toString();
	}

	const item_translations = Object.values(itemTranslationsMap).filter(
		(t) => t.lang_key !== 'en' && (t.label || t.description)
	);
	const item_details_translations = Object.values(itemDetailsTranslationsMap).filter(
		(t) =>
			t.lang_key !== 'en' &&
			(t.full_label ||
				t.full_description ||
				t.ingridients ||
				t.supplier ||
				t.nutrition)
	);
	const item_images = Object.values(imageGroups);
	const item_images_translations = Object.values(imageTranslationsGroups);

	return {
		item,
		item_details,
		item_translations,
		item_details_translations,
		item_images,
		item_images_translations,
		image_files: imageFiles,
	};
};
