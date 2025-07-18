import { useTranslate } from '../../../i18n/i18n';
import { createItemFormConfig } from '../../../logic/createItemFormConfig';
import { withTranslate } from '../../../logic/withTranslate';
import { UICreateItemFieldset } from './UI/UICreateItemFieldset';
import { UICreateItemInput } from './UI/UICreateItemInput';
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
				<UICreateItemInput
					config={createItemFormConfig.general.input.displayedName}
				/>
				<UICreateItemInput config={createItemFormConfig.general.input.price} />
				<UICreateItemInput
					config={createItemFormConfig.general.input.shortDescription}
				/>
				<UICreateItemInput config={createItemFormConfig.general.input.oldPrice} />
				<UICreateItemInput
					config={createItemFormConfig.general.input.uniqueName}
				/>
				<UICreateItemInput
					config={createItemFormConfig.general.select.category}
				/>
				<div className='flex'>
					<UICreateItemInput
						config={createItemFormConfig.general.checkbox.isBestseller}
					/>
					<UICreateItemInput
						config={createItemFormConfig.general.checkbox.isSecretBox}
					/>
				</div>
				<UICreateItemInput config={createItemFormConfig.general.select.type} />
			</UICreateItemFieldset>
		);
	}),
	Details: withTranslate(({ translate }: CreateItemFieldsetProps) => {
		return (
			<UICreateItemFieldset>
				<UICreateItemLegend>
					{translate('create_item.legend.details')}
				</UICreateItemLegend>
				<UICreateItemInput
					config={createItemFormConfig.details.input.fullDisplayedName}
				/>
				<UICreateItemInput
					config={createItemFormConfig.details.input.ingridients}
				/>
				<UICreateItemInput
					config={createItemFormConfig.details.input.fullDescription}
				/>
				<UICreateItemInput config={createItemFormConfig.details.input.supplier} />
				<UICreateItemInput
					config={createItemFormConfig.details.input.supplierLink}
				/>
				<UICreateItemInput
					config={createItemFormConfig.details.input.nutritionalValue}
				/>
			</UICreateItemFieldset>
		);
	}),
	Images: withTranslate(({ translate }: CreateItemFieldsetProps) => {
		return (
			<UICreateItemFieldset>
				<UICreateItemLegend>
					{translate('create_item.legend.images')}
				</UICreateItemLegend>
				<UICreateItemInput config={createItemFormConfig.images.input.title} />
				<UICreateItemInput config={createItemFormConfig.images.input.name} />
				<UICreateItemInput config={createItemFormConfig.images.checkbox.isMain} />
				<UICreateItemInput config={createItemFormConfig.images.file.file} />
			</UICreateItemFieldset>
		);
	}),
};
