import { useTranslate } from '../../../../i18n/i18n';
import { SelectRecord } from '../../../../logic/createItemFormConfig';
import { withTranslate } from '../../../../logic/withTranslate';
import { LanguageCodes, Option } from '../../../../types';
import { UISelect } from '../../../UI/UISelect';

type UICreateItemSelectProps = {
	config: SelectRecord;
	translate: ReturnType<typeof useTranslate>;
	languageCode?: LanguageCodes;
	options: Option[];
};

export const UICreateItemSelect = withTranslate(
	({ translate, config, options }: UICreateItemSelectProps) => {
		const { translateKey, ...attributes } = config;
		const text = translate(translateKey);

		return (
			<UISelect key={config.name} text={text} {...attributes} options={options} />
		);
	}
);
