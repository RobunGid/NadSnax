import { JSX } from 'react';
import { Option } from '../types';

export type InputRecord = {
	name: string;
	translateKey: string;
} & JSX.IntrinsicElements['input'];

export type SelectRecord = {
	name: string;
	translateKey: string;
	options: Option[];
} & JSX.IntrinsicElements['select'];

type FormConfig = {
	general: {
		input: {
			displayedName: InputRecord;
			uniqueName: InputRecord;
			shortDescription: InputRecord;
			price: InputRecord;
			oldPrice: InputRecord;
		};
		checkbox: {
			isBestseller: InputRecord;
			isSecretBox: InputRecord;
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
			name: InputRecord;
		};
		checkbox: {
			isMain: InputRecord;
		};
		file: {
			file: InputRecord;
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
				translateKey: 'create_item.form.general.displayed_name',
				required: true,
				autoComplete: 'off',
				minLength: 6,
				type: 'text',
			},
			price: {
				name: 'price',
				translateKey: 'create_item.form.general.price',
				required: true,
				type: 'number',
				min: 0,
			},
			shortDescription: {
				name: 'shortDescription',
				translateKey: 'create_item.form.general.short_description',
				required: true,
				autoComplete: 'off',
				minLength: 12,
				type: 'text',
			},
			oldPrice: {
				name: 'oldPrice',
				translateKey: 'create_item.form.general.old_price',
				required: false,
				type: 'number',
				min: 0,
			},
			uniqueName: {
				name: 'name',
				translateKey: 'create_item.form.general.unique_name',
				required: true,
				autoComplete: 'off',
				minLength: 6,
				type: 'text',
			},
		},
		checkbox: {
			isBestseller: {
				name: 'isBestseller',
				translateKey: 'create_item.form.general.is_bestseller',
				type: 'checkbox',
			},
			isSecretBox: {
				name: 'isSecretBox',
				translateKey: 'create_item.form.general.is_secret_box',
				type: 'checkbox',
			},
		},
		select: {
			category: {
				name: 'category',
				translateKey: 'create_item.form.general.category',
				options: [],
			},
			type: {
				name: 'type',
				translateKey: 'create_item.form.general.type',
				options: [],
			},
		},
	},
	details: {
		input: {
			fullDisplayedName: {
				name: 'fullDisplayedName',
				translateKey: 'create_item.form.details.full_displayed_name',
				required: true,
			},
			ingridients: {
				name: 'ingridients',
				translateKey: 'create_item.form.details.ingridients',
				required: true,
			},
			fullDescription: {
				name: 'fullDescription',
				translateKey: 'create_item.form.details.full_description',
				required: true,
			},
			supplier: {
				name: 'supplier',
				translateKey: 'create_item.form.details.supplier',
				required: true,
			},
			supplierLink: {
				name: 'supplierLink',
				translateKey: 'create_item.form.details.supplier_link',
				required: true,
			},
			nutritionalValue: {
				name: 'nutritionalValue',
				translateKey: 'create_item.form.details.nutritional_value',
				required: true,
			},
		},
	},
	images: {
		input: {
			title: {
				name: 'title',
				translateKey: 'create_item.form.images.title',
				required: true,
			},
			name: {
				name: 'name',
				translateKey: 'create_item.form.images.name',
				required: true,
			},
		},
		checkbox: {
			isMain: {
				name: 'isMain',
				translateKey: 'create_item.form.images.is_main',
				type: 'checkbox',
			},
		},
		file: {
			file: {
				name: 'file',
				translateKey: 'create_item.form.images.file',
				type: 'file',
				required: true,
			},
		},
	},
	general_translations: {
		input: {
			langKey: {
				name: 'langKey',
				translateKey: 'create_item.form.general_translations.lang_key',
				required: true,
			},
			label: {
				name: 'label',
				translateKey: 'create_item.form.general_translations.label',
				required: true,
			},
			shortDescription: {
				name: 'shortDescription',
				translateKey: 'create_item.form.general_translations.short_description',
				required: true,
			},
		},
	},
	details_translations: {
		input: {
			fullDescription: {
				name: 'fullDescription',
				translateKey: 'create_item.form.details_translations.full_description',
				required: true,
			},
			fullLabel: {
				name: 'fullLabel',
				translateKey: 'create_item.form.details_translations.full_label',
				required: true,
			},
			ingridients: {
				name: 'ingridients',
				translateKey: 'create_item.form.details_translations.ingridients',
				required: true,
			},
			nutritional: {
				name: 'nutritional',
				translateKey: 'create_item.form.details_translations.nutritional',
				required: true,
			},
			supplier: {
				name: 'supplier',
				translateKey: 'create_item.form.details_translations.supplier',
				required: true,
			},
			langKey: {
				name: 'langKey',
				translateKey: 'create_item.form.details_translations.lang_key',
				required: true,
			},
		},
	},
	images_translations: {
		input: {
			title: {
				name: 'title',
				translateKey: 'create_item.form.images_translations.title',
				required: true,
			},
			alt: {
				name: 'alt',
				translateKey: 'create_item.form.images_translations.alt',
				required: true,
			},
			langKey: {
				name: 'langKey',
				translateKey: 'create_item.form.images_translations.lang_key',
				required: true,
			},
		},
	},
};
