import { Fragment, MouseEventHandler, useState } from 'react';
import { useTranslate } from '../../../i18n/i18n';
import { createItemFormConfig } from '../../../logic/createItemFormConfig';
import { withTranslate } from '../../../logic/withTranslate';
import { UICreateItemFieldset } from './UI/UICreateItemFieldset';
import { UICreateItemInput } from './UI/UICreateItemInput';
import { UICreateItemLegend } from './UI/UICreateItemLegend';
import { UICreateItemFieldsetLine } from './UI/UICreateItemFieldsetLine';
import { UIButton } from '../../UI/UIButton';
import { languages } from '../../../logic/languages';
import { CreateItemInputGroup } from './CreateItemInputGroup';

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
						<Fragment key={count}>
							{languages.map((language) => (
								<Fragment key={language.key}>
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
								</Fragment>
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
						</Fragment>
					);
				})}
			</UICreateItemFieldset>
		);
	}),
};
