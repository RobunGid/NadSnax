import { JSX } from 'react';
import { Option } from '../types';

export type InputRecord = {
	translateKey: string;
} & JSX.IntrinsicElements['input'] &
	Required<Pick<JSX.IntrinsicElements['input'], 'name'>>;

export type SelectRecord = {
	translateKey: string;
	options: Option[];
} & JSX.IntrinsicElements['select'] &
	Required<Pick<JSX.IntrinsicElements['select'], 'name'>>;

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
			langKey: InputRecord;
		};
	};
};

export const createItemFormConfig: FormConfig = {
	general: {
		input: {
			displayedName: {
				name: 'item.label',
				translateKey: 'create_item.form.general.displayed_name',
				required: true,
				autoComplete: 'off',
				minLength: 6,
				type: 'text',
			},
			price: {
				name: 'item.price',
				translateKey: 'create_item.form.general.price',
				required: true,
				type: 'number',
				min: 0,
			},
			shortDescription: {
				name: 'item.description',
				translateKey: 'create_item.form.general.short_description',
				required: true,
				autoComplete: 'off',
				minLength: 12,
				type: 'text',
			},
			oldPrice: {
				name: 'item.oldPrice',
				translateKey: 'create_item.form.general.old_price',
				required: false,
				type: 'number',
				min: 0,
			},
			uniqueName: {
				name: 'item.name',
				translateKey: 'create_item.form.general.unique_name',
				required: true,
				autoComplete: 'off',
				minLength: 6,
				type: 'text',
			},
		},
		checkbox: {
			isBestseller: {
				name: 'item.isBestseller',
				translateKey: 'create_item.form.general.is_bestseller',
				type: 'checkbox',
			},
			isSecretBox: {
				name: 'item.isSecretBox',
				translateKey: 'create_item.form.general.is_secret_box',
				type: 'checkbox',
			},
		},
		select: {
			category: {
				name: 'item.category',
				translateKey: 'create_item.form.general.category',
				required: true,
				options: [],
			},
			type: {
				name: 'item.type',
				translateKey: 'create_item.form.general.type',
				required: true,
				options: [],
			},
		},
	},
	details: {
		input: {
			fullDisplayedName: {
				name: 'details.fullDisplayedName',
				translateKey: 'create_item.form.details.full_displayed_name',
				required: true,
			},
			ingridients: {
				name: 'details.ingridients',
				translateKey: 'create_item.form.details.ingridients',
				required: true,
			},
			fullDescription: {
				name: 'details.fullDescription',
				translateKey: 'create_item.form.details.full_description',
				required: true,
			},
			supplier: {
				name: 'details.supplier',
				translateKey: 'create_item.form.details.supplier',
				required: true,
			},
			supplierLink: {
				name: 'details.supplierLink',
				translateKey: 'create_item.form.details.supplier_link',
				required: true,
			},
			nutritionalValue: {
				name: 'details.nutritionalValue',
				translateKey: 'create_item.form.details.nutritional_value',
				required: true,
			},
		},
	},
	images: {
		input: {
			title: {
				name: 'images.title',
				translateKey: 'create_item.form.images.title',
				required: true,
			},
			name: {
				name: 'images.name',
				translateKey: 'create_item.form.images.name',
				required: true,
			},
		},
		checkbox: {
			isMain: {
				name: 'images.isMain',
				translateKey: 'create_item.form.images.is_main',
				type: 'checkbox',
			},
		},
		file: {
			file: {
				name: 'images.file',
				translateKey: 'create_item.form.images.file',
				type: 'file',
				required: true,
			},
		},
	},
	general_translations: {
		input: {
			langKey: {
				name: 'general_translations.langKey',
				translateKey: 'create_item.form.general_translations.lang_key',
				required: true,
			},
			label: {
				name: 'general_translations.label',
				translateKey: 'create_item.form.general_translations.label',
				required: true,
			},
			shortDescription: {
				name: 'general_translations.shortDescription',
				translateKey: 'create_item.form.general_translations.short_description',
				required: true,
			},
		},
	},
	details_translations: {
		input: {
			fullDescription: {
				name: 'details_translations.fullDescription',
				translateKey: 'create_item.form.details_translations.full_description',
				required: true,
			},
			fullLabel: {
				name: 'details_translations.fullLabel',
				translateKey: 'create_item.form.details_translations.full_label',
				required: true,
			},
			ingridients: {
				name: 'details_translations.ingridients',
				translateKey: 'create_item.form.details_translations.ingridients',
				required: true,
			},
			nutritional: {
				name: 'details_translations.nutritional',
				translateKey: 'create_item.form.details_translations.nutritional',
				required: true,
			},
			supplier: {
				name: 'details_translations.supplier',
				translateKey: 'create_item.form.details_translations.supplier',
				required: true,
			},
			langKey: {
				name: 'details_translations.langKey',
				translateKey: 'create_item.form.details_translations.lang_key',
				required: true,
			},
		},
	},
	images_translations: {
		input: {
			title: {
				name: 'images_translations.title',
				translateKey: 'create_item.form.images_translations.title',
				required: true,
			},
			langKey: {
				name: 'images_translations.langKey',
				translateKey: 'create_item.form.images_translations.lang_key',
				required: true,
			},
		},
	},
};
