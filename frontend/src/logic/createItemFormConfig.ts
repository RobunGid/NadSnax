import { JSX } from 'react';
import { Option } from '../types';

export type InputRecord = {
	name: string;
	placeholderKey: string;
} & JSX.IntrinsicElements['input'];

export type CheckboxRecord = {
	name: string;
	placeholderKey: string;
} & JSX.IntrinsicElements['input'];

export type SelectRecord = {
	name: string;
	textKey: string;
	options: Option[];
} & JSX.IntrinsicElements['select'];

type FileInputRecord = {
	name: string;
	placeholderKey: string;
} & JSX.IntrinsicElements['input'];

type FormConfig = {
	general: {
		input: {
			displayedName: InputRecord;
			uniqueName: InputRecord;
			shortDescription: InputRecord;
			price: InputRecord;
			oldPrice?: InputRecord;
		};
		checkbox: {
			isBestseller: CheckboxRecord;
			isSecretBox: CheckboxRecord;
		};
		select: {
			category: SelectRecord;
			type: SelectRecord;
		};
	};
	details: {
		input: {
			fullDisplayedName: InputRecord;
			ingridients: InputRecord;
			fullDescription: InputRecord;
			supplier: InputRecord;
			supplierLink: InputRecord;
			nutritionalValue: InputRecord;
		};
	};
	images: {
		input: {
			title: InputRecord;
			alt: InputRecord;
			name: InputRecord;
		};
		checkbox: {
			isMain: CheckboxRecord;
		};
		file: {
			file: FileInputRecord;
		};
	};
	general_translations: {
		input: {
			langKey: InputRecord;
			label: InputRecord;
			shortDescription: InputRecord;
		};
	};
	details_translations: {
		input: {
			fullDescription: InputRecord;
			fullLabel: InputRecord;
			ingridients: InputRecord;
			nutritional: InputRecord;
			supplier: InputRecord;
			langKey: InputRecord;
		};
	};
	images_translations: {
		input: {
			title: InputRecord;
			alt: InputRecord;
			langKey: InputRecord;
		};
	};
};

export const createItemFormConfig: FormConfig = {
	general: {
		input: {
			displayedName: {
				name: 'label',
				placeholderKey: 'create_item.form.general.displayed_name',
				required: true,
				autoComplete: 'off',
				minLength: 6,
				type: 'text',
			},
			price: {
				name: 'price',
				placeholderKey: 'create_item.form.general.price',
				required: true,
				type: 'number',
				min: 0,
			},
			shortDescription: {
				name: 'shortDescription',
				placeholderKey: 'create_item.form.general.short_description',
				required: true,
				autoComplete: 'off',
				minLength: 12,
				type: 'text',
			},
			oldPrice: {
				name: 'oldPrice',
				placeholderKey: 'create_item.form.general.old_price',
				required: false,
				type: 'number',
				min: 0,
			},
			uniqueName: {
				name: 'name',
				placeholderKey: 'create_item.form.general.unique_name',
				required: true,
				autoComplete: 'off',
				minLength: 6,
				type: 'text',
			},
		},
		checkbox: {
			isBestseller: {
				name: 'isBestseller',
				placeholderKey: 'create_item.form.general.is_bestseller',
				type: 'checkbox',
			},
			isSecretBox: {
				name: 'isSecretBox',
				placeholderKey: 'create_item.form.general.is_secret_box',
				type: 'checkbox',
			},
		},
		select: {
			category: {
				name: 'category',
				textKey: 'create_item.form.general.category',
				options: [],
			},
			type: {
				name: 'type',
				textKey: 'create_item.form.general.type',
				options: [],
			},
		},
	},
	details: {
		input: {
			fullDisplayedName: {
				name: 'fullDisplayedName',
				placeholderKey: 'create_item.form.details.full_displayed_name',
				required: true,
			},
			ingridients: {
				name: 'ingridients',
				placeholderKey: 'create_item.form.details.ingridients',
				required: true,
			},
			fullDescription: {
				name: 'fullDescription',
				placeholderKey: 'create_item.form.details.full_description',
				required: true,
			},
			supplier: {
				name: 'supplier',
				placeholderKey: 'create_item.form.details.supplier',
				required: true,
			},
			supplierLink: {
				name: 'supplierLink',
				placeholderKey: 'create_item.form.details.supplier_link',
				required: true,
			},
			nutritionalValue: {
				name: 'nutritionalValue',
				placeholderKey: 'create_item.form.details.nutritional_value',
				required: true,
			},
		},
	},
	images: {
		input: {
			title: {
				name: 'title',
				placeholderKey: 'create_item.form.images.title',
				required: true,
			},
			alt: {
				name: 'alt',
				placeholderKey: 'create_item.form.images.alt',
				required: true,
			},
			name: {
				name: 'name',
				placeholderKey: 'create_item.form.images.name',
				required: true,
			},
		},
		checkbox: {
			isMain: {
				name: 'isMain',
				placeholderKey: 'create_item.form.images.is_main',
				type: 'checkbox',
			},
		},
		file: {
			file: {
				name: 'file',
				placeholderKey: 'create_item.form.images.file',
				type: 'file',
				required: true,
			},
		},
	},
	general_translations: {
		input: {
			langKey: {
				name: 'langKey',
				placeholderKey: 'create_item.form.general_translations.lang_key',
				required: true,
			},
			label: {
				name: 'label',
				placeholderKey: 'create_item.form.general_translations.label',
				required: true,
			},
			shortDescription: {
				name: 'shortDescription',
				placeholderKey: 'create_item.form.general_translations.short_description',
				required: true,
			},
		},
	},
	details_translations: {
		input: {
			fullDescription: {
				name: 'fullDescription',
				placeholderKey: 'create_item.form.details_translations.full_description',
				required: true,
			},
			fullLabel: {
				name: 'fullLabel',
				placeholderKey: 'create_item.form.details_translations.full_label',
				required: true,
			},
			ingridients: {
				name: 'ingridients',
				placeholderKey: 'create_item.form.details_translations.ingridients',
				required: true,
			},
			nutritional: {
				name: 'nutritional',
				placeholderKey: 'create_item.form.details_translations.nutritional',
				required: true,
			},
			supplier: {
				name: 'supplier',
				placeholderKey: 'create_item.form.details_translations.supplier',
				required: true,
			},
			langKey: {
				name: 'langKey',
				placeholderKey: 'create_item.form.details_translations.lang_key',
				required: true,
			},
		},
	},
	images_translations: {
		input: {
			title: {
				name: 'title',
				placeholderKey: 'create_item.form.images_translations.title',
				required: true,
			},
			alt: {
				name: 'alt',
				placeholderKey: 'create_item.form.images_translations.alt',
				required: true,
			},
			langKey: {
				name: 'langKey',
				placeholderKey: 'create_item.form.images_translations.lang_key',
				required: true,
			},
		},
	},
};
