import { ChangeEventHandler, Fragment, MouseEventHandler, useState } from 'react';
import { useTranslate } from '../../../i18n/i18n';
import { createItemFormConfig, InputRecord } from '../../../logic/createItemFormConfig';
import { withTranslate } from '../../../logic/withTranslate';
import { UICreateItemFieldset } from './UI/UICreateItemFieldset';
import { UICreateItemLegend } from './UI/UICreateItemLegend';
import { UICreateItemFieldsetLine } from './UI/UICreateItemFieldsetLine';
import { UIButton } from '../../UI/UIButton';
import { languages } from '../../../logic/languages';
import { CreateItemInputGroup } from './CreateItemInputGroup';
import { useStateSelector } from '../../../store';
import { ItemType } from '../../../types';
import { CreateItemInput } from './CreateItemInput';
import { CreateItemSelect } from './CreateItemSelect';

interface CreateItemFieldsetProps {
	translate: ReturnType<typeof useTranslate>;
}

export const CreateItemFieldset = {
	General: withTranslate(({ translate }: CreateItemFieldsetProps) => {
		const [selectedCategory, setSelectedCategory] = useState<string>(
			sessionStorage.getItem('item.category') ?? ''
		);

		const categories = useStateSelector((state) => state.category.categoryList);
		const categoryOptions = categories.map((category) => ({
			text: category.name,
			value: category.id,
		}));
		const defaultTypes: Omit<ItemType, 'category'>[] = [];
		const types = categories.reduce(
			(prev, category) => [...prev, ...category.types],
			defaultTypes
		);
		const typeOptions = types
			.filter((type) => type.categoryId == selectedCategory)
			.map((type) => ({
				text: type.name,
				value: type.id,
			}));

		const handleChangeCategory: ChangeEventHandler<HTMLSelectElement> = (event) =>
			setSelectedCategory(event.target.value);

		return (
			<UICreateItemFieldset type='general'>
				<UICreateItemLegend>
					{translate('create_item.legend.general')}{' '}
				</UICreateItemLegend>
				<CreateItemInput config={createItemFormConfig.general.input.uniqueName} />
				{languages.map((language) => (
					<Fragment key={language.key}>
						<CreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.general.input.displayedName}
						/>
						<CreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.general.input.price}
						/>
						<CreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.general.input.shortDescription}
						/>
						<CreateItemInput
							languageCode={language.key}
							config={createItemFormConfig.general.input.oldPrice}
						/>
					</Fragment>
				))}
				<div className='flex'>
					<CreateItemInput
						config={createItemFormConfig.general.checkbox.isSecretBox}
					/>
					<CreateItemInput
						config={createItemFormConfig.general.checkbox.isBestseller}
					/>
				</div>
				<CreateItemSelect
					config={{
						...createItemFormConfig.general.select.category,
						onChange: handleChangeCategory,
					}}
					options={categoryOptions}
				/>

				<CreateItemSelect
					config={createItemFormConfig.general.select.type}
					options={typeOptions}
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
				{languages.map((language) => (
					<CreateItemInputGroup
						configs={createItemFormConfig.details.input}
						language={language.key}
						key={language.key}
					/>
				))}
			</UICreateItemFieldset>
		);
	}),
	Images: withTranslate(({ translate }: CreateItemFieldsetProps) => {
		const defaultImageCount: number[] = [1];
		const savedImageCount = sessionStorage.getItem('createItemImageCount');
		if (savedImageCount) {
			for (let i = 2; i < parseInt(savedImageCount) + 1; i++) {
				defaultImageCount.push(i);
			}
		}

		const [imageCount, setImageCount] = useState<number[]>(defaultImageCount);
		console.log(imageCount);
		const hideAddButton = imageCount.length >= 10;
		const hideRemoveButton = imageCount.length == 1;

		const handleAddPicture: MouseEventHandler<HTMLButtonElement> = (event) => {
			event.preventDefault();
			setImageCount((prev) => {
				sessionStorage.setItem(
					'createItemImageCount',
					(prev.length + 1).toString()
				);
				return [...prev, prev.length + 1];
			});
		};
		const handleRemovePicture: MouseEventHandler<HTMLButtonElement> = (event) => {
			event.preventDefault();
			setImageCount((prev) => {
				sessionStorage.setItem(
					'createItemImageCount',
					(prev.length - 1).toString()
				);
				return prev.slice(0, prev.length - 1);
			});
		};

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
						<Fragment key={Math.random()}>
							<CreateItemInput
								config={{
									...createItemFormConfig.images.input.name,
									name: `${createItemFormConfig.images.input.name.name}_${count}`,
								}}
							/>

							{languages.map((language) => {
								const configs: Record<string, InputRecord> = {
									[`${createItemFormConfig.images.input.title.name}_${count}`]:
										{
											...createItemFormConfig.images.input.title,
											name: `${createItemFormConfig.images.input.title.name}_${count}`,
										},
								};
								return (
									<CreateItemInputGroup
										configs={configs}
										language={language.key}
										key={language.key}
									/>
								);
							})}
							<CreateItemInput
								config={{
									...createItemFormConfig.images.checkbox.isMain,
									name: `${createItemFormConfig.images.checkbox.isMain.name}_${count}`,
								}}
							/>
							<CreateItemInput
								config={{
									...createItemFormConfig.images.file.file,
									name: `${createItemFormConfig.images.file.file.name}_${count}`,
								}}
							/>
							<div />
							{count != imageCount[imageCount.length - 1] && (
								<UICreateItemFieldsetLine />
							)}
						</Fragment>
					);
				})}
			</UICreateItemFieldset>
		);
	}),
};
