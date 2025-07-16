import { CreateItemFieldset } from './CreateItemFieldset';
import { UICreateItemForm } from './UI/UICreateItemForm';
import { UICreateItemSectionContainer } from './UI/UICreateItemSectionContainer';

export const CreateItemSection = () => {
	return (
		<UICreateItemSectionContainer>
			<UICreateItemForm>
				<CreateItemFieldset.General />
				<CreateItemFieldset.Details />
			</UICreateItemForm>
		</UICreateItemSectionContainer>
	);
};
