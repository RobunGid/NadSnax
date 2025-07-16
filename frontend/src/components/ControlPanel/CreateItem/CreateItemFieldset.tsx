import { useTranslate } from '../../../i18n/i18n';
import { createItemFormConfig } from '../../../logic/createItemFormConfig';
import { UIInput } from '../../UI/UIInput';
import { UISelect } from '../../UI/UISelect';
import { UICreateItemFieldset } from './UI/UICreateItemFieldset';
import { UICreateItemLegend } from './UI/UICreateItemLegend';

export const CreateItemFieldset = {
	General: () => {
		const translate = useTranslate();
		return (
			<UICreateItemFieldset type='general'>
				<UICreateItemLegend>
					{translate('create_item.legend.general')}
				</UICreateItemLegend>
				{Object.values(createItemFormConfig.general.input).map((config) => {
					return (
						<UIInput
							key={config.name}
							placeholder={translate(config.placeholderKey)}
							{...config}
						/>
					);
				})}
				{Object.values(createItemFormConfig.general.select)
					.slice(0, 1)
					.map((config) => {
						const text = translate(config.textKey);
						return <UISelect key={config.name} {...config} text={text} />;
					})}
				<div className='flex'>
					{Object.values(createItemFormConfig.general.checkbox).map(
						(config) => {
							return (
								<UIInput
									key={config.name}
									placeholder={translate(config.placeholderKey)}
									{...config}
								/>
							);
						}
					)}
				</div>
				{Object.values(createItemFormConfig.general.select)
					.slice(1, 2)
					.map((config) => {
						const text = translate(config.textKey);
						return <UISelect key={config.name} {...config} text={text} />;
					})}
			</UICreateItemFieldset>
		);
	},
	Details: () => {
		const translate = useTranslate();
		return (
			<UICreateItemFieldset>
				<UICreateItemLegend>
					{translate('create_item.legend.details')}
				</UICreateItemLegend>
				{Object.values(createItemFormConfig.details.input).map((config) => {
					return (
						<UIInput
							key={config.name}
							placeholder={translate(config.placeholderKey)}
							{...config}
						/>
					);
				})}
			</UICreateItemFieldset>
		);
	},
};
