import { useTranslate } from '../../../../i18n/i18n';
import { InputRecord } from '../../../../logic/createItemFormConfig';
import { withTranslate } from '../../../../logic/withTranslate';
import { LanguageCodes } from '../../../../types';
import { UIInput } from '../../../UI/UIInput';

type UICreateItemInputProps = {
	config: InputRecord & Required<Pick<InputRecord, 'name'>>;
	translate: ReturnType<typeof useTranslate>;
	languageCode?: LanguageCodes;
};

export const UICreateItemInput = withTranslate(
	({ translate, config, languageCode }: UICreateItemInputProps) => {
		const { translateKey, ...attributes } = config;
		const text = translate(translateKey);
		return (
			<UIInput
				key={config.name}
				placeholder={text}
				languageCode={languageCode}
				{...attributes}
			/>
		);
	}
);
