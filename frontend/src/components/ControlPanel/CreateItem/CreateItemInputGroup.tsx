import { InputRecord, SelectRecord } from '../../../logic/createItemFormConfig';
import { LanguageCodes } from '../../../types';
import { UICreateItemInput } from './UI/UICreateItemInput';

interface CreateItemInputGroupProps {
	configs: Record<string, InputRecord> | Record<string, SelectRecord>;
	language: LanguageCodes;
}

export const CreateItemInputGroup = ({
	configs,
	language,
}: CreateItemInputGroupProps) => {
	return Object.values(configs).map((config) => (
		<UICreateItemInput languageCode={language} config={config} key={config.name} />
	));
};
