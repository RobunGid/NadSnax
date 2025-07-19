import { useState } from 'react';
import { useTranslate } from '../../../i18n/i18n';
import { createItemFormConfig } from '../../../logic/createItemFormConfig';
import { withTranslate } from '../../../logic/withTranslate';
import { UICreateItemFieldset } from './UI/UICreateItemFieldset';
import { UICreateItemInput } from './UI/UICreateItemInput';
import { UICreateItemLegend } from './UI/UICreateItemLegend';
import { UICreateItemFieldsetLine } from './UI/UICreateItemFieldsetLine';
import { UIButton } from '../../UI/UIButton';
import { languages } from '../../../logic/languages';

interface CreateItemFieldsetProps {
	translate: ReturnType<typeof useTranslate>;
}

export const CreateItemFieldset = {
	General: withTranslate(({ translate }: CreateItemFieldsetProps) => {
		return (
			<UICreateItemFieldset type='general'>
				<UICreateItemLegend>
					{translate('create_item.legend.general')}{' '}
				</UICreateItemLegend>

				{languages.map((language) => (
					<>
						<UICreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.general.input.displayedName}
						/>
						<UICreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.general.input.price}
						/>
						<UICreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.general.input.shortDescription}
						/>
						<UICreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.general.input.oldPrice}
						/>
						<UICreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.general.input.uniqueName}
						/>
					</>
				))}
				<div className='flex'>
					<UICreateItemInput
						config={createItemFormConfig.general.checkbox.isSecretBox}
					/>
					<UICreateItemInput
						config={createItemFormConfig.general.checkbox.isBestseller}
					/>
				</div>
				<UICreateItemInput
					config={createItemFormConfig.general.select.category}
				/>
				<div />

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
				{languages.map((language) => (
					<>
						<UICreateItemInput
							config={createItemFormConfig.details.input.fullDisplayedName}
							languageCode={language.key}
						/>
						<UICreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.details.input.ingridients}
						/>
						<UICreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.details.input.fullDescription}
						/>
						<UICreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.details.input.supplier}
						/>
						<UICreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.details.input.supplierLink}
						/>
						<UICreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.details.input.nutritionalValue}
						/>
					</>
				))}
			</UICreateItemFieldset>
		);
	}),
	Images: withTranslate(({ translate }: CreateItemFieldsetProps) => {
		const [imageCount, setImageCount] = useState([1]);
		const hideAddButton = imageCount.length >= 10;
		const hideRemoveButton = imageCount.length == 1;

		const handleAddPicture = () => setImageCount((prev) => [...prev, prev.length]);
		const handleRemovePicture = () =>
			setImageCount((prev) => prev.slice(0, prev.length - 1));

		return (
			<UICreateItemFieldset type='images'>
				<UICreateItemLegend>
					{translate('create_item.legend.images')}
				</UICreateItemLegend>
				<UIButton
					onClick={handleAddPicture}
					hidden={hideAddButton}
					className='w-full'
				>
					{translate('create_item.add_picture')}
				</UIButton>
				<UIButton
					onClick={handleRemovePicture}
					type='danger'
					className='w-full'
					hidden={hideRemoveButton}
				>
					{translate('create_item.delete_picture')}
				</UIButton>
				{imageCount.map((count) => {
					return (
						<>
							{languages.map((language) => (
								<>
									<UICreateItemInput
										languageCode={language.key}
										config={{
											...createItemFormConfig.images.input.title,
											name: `${createItemFormConfig.images.input.title.name}_${count}`,
										}}
									/>
									<UICreateItemInput
										languageCode={language.key}
										config={{
											...createItemFormConfig.images.input.name,
											name: `${createItemFormConfig.images.input.name.name}_${count}`,
										}}
									/>
								</>
							))}
							<UICreateItemInput
								config={{
									...createItemFormConfig.images.checkbox.isMain,
									name: `${createItemFormConfig.images.checkbox.isMain.name}_${count}`,
								}}
							/>
							<UICreateItemInput
								config={{
									...createItemFormConfig.images.file.file,
									name: `${createItemFormConfig.images.file.file.name}_${count}`,
								}}
							/>
							{count != imageCount[imageCount.length - 1] && (
								<UICreateItemFieldsetLine />
							)}
						</>
					);
				})}
			</UICreateItemFieldset>
		);
	}),
};
