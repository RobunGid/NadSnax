import { useTranslate } from '../../../i18n/i18n';
import {
	CheckboxRecord,
	createItemFormConfig,
	InputRecord,
	SelectRecord,
} from '../../../logic/createItemFormConfig';
import { UIInput } from '../../UI/UIInput';
import { UISelect } from '../../UI/UISelect';
import { UICreateItemForm } from './UI/UICreateItemForm';
import { UICreateItemSectionContainer } from './UI/UICreateItemSectionContainer';

export const CreateItemSection = () => {
	const translate = useTranslate();

	const inputConfigs = Object.values(createItemFormConfig.general).filter(
		(item) => 'type' in item
	) as Array<InputRecord | CheckboxRecord>;

	const selectConfigs = Object.values(createItemFormConfig.general).filter(
		(item) => !('type' in item)
	) as Array<SelectRecord>;

	return (
		<UICreateItemSectionContainer>
			<UICreateItemForm>
				{inputConfigs.map((value) => {
					const { placeholderKey, name, ...rest } = value;
					return (
						<UIInput
							key={name}
							name={name}
							placeholder={translate(placeholderKey)}
							{...rest}
						/>
					);
				})}
				{selectConfigs.map((value) => {
					const { name, textKey, ...rest } = value;
					const text = translate(textKey);
					return <UISelect key={name} name={name} {...rest} text={text} />;
				})}
			</UICreateItemForm>
		</UICreateItemSectionContainer>
	);
};
