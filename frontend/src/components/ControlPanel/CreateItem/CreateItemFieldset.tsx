import { ChangeEventHandler, Fragment, MouseEventHandler, useState } from 'react';
import { useTranslate } from '../../../i18n/i18n';
import { createItemFormConfig, InputRecord } from '../../../logic/createItemFormConfig';
import { withTranslate } from '../../../logic/withTranslate';
import { UICreateItemFieldset } from './UI/UICreateItemFieldset';
import { UICreateItemInput } from './UI/UICreateItemInput';
import { UICreateItemLegend } from './UI/UICreateItemLegend';
import { UICreateItemFieldsetLine } from './UI/UICreateItemFieldsetLine';
import { UIButton } from '../../UI/UIButton';
import { languages } from '../../../logic/languages';
import { CreateItemInputGroup } from './CreateItemInputGroup';
import { useStateSelector } from '../../../store';
import { UICreateItemSelect } from './UI/UICreateItemSelect';
import { ItemType } from '../../../types';

interface CreateItemFieldsetProps {
	translate: ReturnType<typeof useTranslate>;
}

export const CreateItemFieldset = {
	General: withTranslate(({ translate }: CreateItemFieldsetProps) => {
		const [selectedCategory, setSelectedCategory] = useState<null | string>(null);

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

				{languages.map((language) => (
					<CreateItemInputGroup
						configs={createItemFormConfig.general.input}
						language={language.key}
						key={language.key}
					/>
				))}
				<div className='flex'>
					<UICreateItemInput
						config={createItemFormConfig.general.checkbox.isSecretBox}
					/>
					<UICreateItemInput
						config={createItemFormConfig.general.checkbox.isBestseller}
					/>
				</div>
				<UICreateItemSelect
					config={{
						...createItemFormConfig.general.select.category,
						onChange: handleChangeCategory,
					}}
					options={categoryOptions}
				/>
				<div />

				<UICreateItemSelect
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
		const [imageCount, setImageCount] = useState([1]);
		const hideAddButton = imageCount.length >= 10;
		const hideRemoveButton = imageCount.length == 1;

		const handleAddPicture: MouseEventHandler<HTMLButtonElement> = (event) => {
			event.preventDefault();
			setImageCount((prev) => [...prev, prev.length]);
		};
		const handleRemovePicture: MouseEventHandler<HTMLButtonElement> = (event) => {
			event.preventDefault();
			setImageCount((prev) => prev.slice(0, prev.length - 1));
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
							<UICreateItemInput
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
