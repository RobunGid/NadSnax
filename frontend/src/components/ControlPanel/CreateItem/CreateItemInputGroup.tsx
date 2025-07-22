import { InputRecord, SelectRecord } from '../../../logic/createItemFormConfig';
import { LanguageCodes } from '../../../types';
import { CreateItemInput } from './CreateItemInput';

interface CreateItemInputGroupProps {
	configs: Record<string, InputRecord> | Record<string, SelectRecord>;
	language: LanguageCodes;
}

export const CreateItemInputGroup = ({
	configs,
	language,
}: CreateItemInputGroupProps) => {
	return Object.values(configs).map((config) => (
		<CreateItemInput
			languageCode={language}
			config={{ ...config, required: language === 'en' && config.required }}
			key={config.name}
		/>
	));
};
