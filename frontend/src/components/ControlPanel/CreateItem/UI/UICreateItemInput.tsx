import { useTranslate } from '../../../../i18n/i18n';
import { InputRecord, SelectRecord } from '../../../../logic/createItemFormConfig';
import { withTranslate } from '../../../../logic/withTranslate';
import { LanguageCodes } from '../../../../types';
import { UIInput } from '../../../UI/UIInput';
import { UISelect } from '../../../UI/UISelect';

interface UICreateItemInputProps {
	config: InputRecord | SelectRecord;
	translate: ReturnType<typeof useTranslate>;
	languageCode?: LanguageCodes;
}

export const UICreateItemInput = withTranslate(
	({ translate, config, languageCode }: UICreateItemInputProps) => {
		const text = translate(config.translateKey);
		const fixedName = languageCode ? `${config.name}_${languageCode}` : config.name;
		if ('options' in config) {
			return <UISelect key={config.name} text={text} {...config} />;
		}
		return (
			<UIInput
				key={config.name}
				placeholder={text}
				languageCode={languageCode}
				{...{ ...config, name: fixedName }}
			/>
		);
	}
);
