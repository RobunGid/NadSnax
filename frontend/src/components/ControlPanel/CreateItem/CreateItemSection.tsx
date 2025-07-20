import { transformFormData } from '../../../logic/transformFormData';
import { CreateItemFieldset } from './CreateItemFieldset';
import { UICreateItemButton } from './UI/UICreateItemButton';
import { UICreateItemForm } from './UI/UICreateItemForm';
import { UICreateItemSectionContainer } from './UI/UICreateItemSectionContainer';

export const CreateItemSection = () => {
	return (
		<UICreateItemSectionContainer>
			<UICreateItemForm
				onSubmit={(event) => {
					event.preventDefault();
					const formData = new FormData(event.target as HTMLFormElement);
					console.log(Object.fromEntries(formData));
					console.log(transformFormData(Object.fromEntries(formData)));
				}}
			>
				<CreateItemFieldset.General />
				<CreateItemFieldset.Details />
				<CreateItemFieldset.Images />
				<UICreateItemButton />
			</UICreateItemForm>
		</UICreateItemSectionContainer>
	);
};
