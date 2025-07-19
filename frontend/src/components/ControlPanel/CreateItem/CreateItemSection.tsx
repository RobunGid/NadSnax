import { CreateItemFieldset } from './CreateItemFieldset';
import { UICreateItemButton } from './UI/UICreateItemButton';
import { UICreateItemForm } from './UI/UICreateItemForm';
import { UICreateItemSectionContainer } from './UI/UICreateItemSectionContainer';

export const CreateItemSection = () => {
	return (
		<UICreateItemSectionContainer>
			<UICreateItemForm>
				<CreateItemFieldset.General />
				<CreateItemFieldset.Details />
				<CreateItemFieldset.Images />
				<UICreateItemButton />
			</UICreateItemForm>
		</UICreateItemSectionContainer>
	);
};
