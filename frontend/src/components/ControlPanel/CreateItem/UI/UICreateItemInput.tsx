import { useTranslate } from '../../../../i18n/i18n';
import { InputRecord, SelectRecord } from '../../../../logic/createItemFormConfig';
import { withTranslate } from '../../../../logic/withTranslate';
import { UIInput } from '../../../UI/UIInput';
import { UISelect } from '../../../UI/UISelect';

interface UICreateItemInputProps {
	config: InputRecord | SelectRecord;
	translate: ReturnType<typeof useTranslate>;
}

export const UICreateItemInput = withTranslate(
	({ translate, config }: UICreateItemInputProps) => {
		const text = translate(config.translateKey);
		if ('options' in config) {
			return <UISelect key={config.name} text={text} {...config} />;
		}
		return <UIInput key={config.name} placeholder={text} {...config} />;
	}
);
