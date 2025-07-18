import { useTranslate } from '../../../i18n/i18n';
import { InputRecord, SelectRecord } from '../../../logic/createItemFormConfig';
import { UIInput } from '../../UI/UIInput';
import { UISelect } from '../../UI/UISelect';

interface CreateItemInputsProps {
	inputConfigs: Record<string, InputRecord | SelectRecord>;
}

export const CreateItemInputs = ({ inputConfigs }: CreateItemInputsProps) => {
	const translate = useTranslate();

	return Object.values(inputConfigs).map((config) => {
		const text = translate(config.translateKey);
		if ('options' in config) {
			return <UISelect key={config.name} text={text} {...config} />;
		}
		return <UIInput key={config.name} placeholder={text} {...config} />;
	});
};
