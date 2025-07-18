import { useTranslate } from '../../../i18n/i18n';
import { createItemFormConfig } from '../../../logic/createItemFormConfig';
import { withTranslate } from '../../../logic/withTranslate';
import { CreateItemInputs } from './CreateItemInputs';
import { UICreateItemFieldset } from './UI/UICreateItemFieldset';
import { UICreateItemLegend } from './UI/UICreateItemLegend';

interface CreateItemFieldsetProps {
	translate: ReturnType<typeof useTranslate>;
}

export const CreateItemFieldset = {
	General: withTranslate(({ translate }: CreateItemFieldsetProps) => {
		return (
			<UICreateItemFieldset type='general'>
				<UICreateItemLegend>
					{translate('create_item.legend.general')}
				</UICreateItemLegend>
				<CreateItemInputs inputConfigs={createItemFormConfig.general.input} />
				<CreateItemInputs
					inputConfigs={{
						category: createItemFormConfig.general.select.category,
					}}
				/>
				<div className='flex'>
					<CreateItemInputs
						inputConfigs={createItemFormConfig.general.checkbox}
					/>
				</div>
				<CreateItemInputs
					inputConfigs={{
						type: createItemFormConfig.general.select.type,
					}}
				/>
			</UICreateItemFieldset>
		);
	}),
	Details: withTranslate(({ translate }: CreateItemFieldsetProps) => {
		return (
			<UICreateItemFieldset>
				<UICreateItemLegend>
					{translate('create_item.legend.details')}
				</UICreateItemLegend>
				<CreateItemInputs inputConfigs={createItemFormConfig.details.input} />
			</UICreateItemFieldset>
		);
	}),
	Images: withTranslate(({ translate }: CreateItemFieldsetProps) => {
		return (
			<UICreateItemFieldset>
				<UICreateItemLegend>
					{translate('create_item.legend.images')}
				</UICreateItemLegend>
				<CreateItemInputs inputConfigs={createItemFormConfig.images.input} />
				<CreateItemInputs inputConfigs={createItemFormConfig.images.checkbox} />
				<CreateItemInputs inputConfigs={createItemFormConfig.images.file} />
			</UICreateItemFieldset>
		);
	}),
};
