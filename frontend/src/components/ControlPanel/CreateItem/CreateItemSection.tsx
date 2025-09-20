import { FormEventHandler } from 'react';
import { Axios } from '../../../api';
import { transformFormData } from '../../../logic/transformFormData';
import { useStateSelector } from '../../../store';
import { CreateItemFieldset } from './CreateItemFieldset';
import { UICreateItemButton } from './UI/UICreateItemButton';
import { UICreateItemForm } from './UI/UICreateItemForm';
import { UICreateItemSectionContainer } from './UI/UICreateItemSectionContainer';

export const CreateItemSection = () => {
	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const transformedData = transformFormData(Object.fromEntries(formData));
		const transformedFormData = new FormData();
		transformedFormData.append('item', JSON.stringify(transformedData.item));
		transformedFormData.append(
			'item_details',
			JSON.stringify(transformedData.item_details)
		);
		transformedFormData.append(
			'item_images',
			JSON.stringify(transformedData.item_images)
		);
		transformedFormData.append(
			'item_translations',
			JSON.stringify(transformedData.item_translations)
		);
		transformedFormData.append(
			'item_details_translations',
			JSON.stringify(transformedData.item_details_translations)
		);
		transformedFormData.append(
			'item_images_translations',
			JSON.stringify(transformedData.item_images_translations)
		);
		transformedData.image_files.forEach((imageFile) => {
			transformedFormData.append('image_file', imageFile);
		});
		const response = await Axios.post('/item', transformedFormData, {
			headers: {
				Authorization: accessToken ? `Bearer ${accessToken}` : '',
				'Content-Type': ' multipart/form-data',
			},
		});
	};

	return (
		<UICreateItemSectionContainer>
			<UICreateItemForm onSubmit={handleSubmitForm}>
				<CreateItemFieldset.General />
				<CreateItemFieldset.Details />
				<CreateItemFieldset.Images />
				<UICreateItemButton />
			</UICreateItemForm>
		</UICreateItemSectionContainer>
	);
};
