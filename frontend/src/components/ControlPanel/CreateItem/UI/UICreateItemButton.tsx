import { ComponentProps } from 'react';
import { UIButton } from '../../../UI/UIButton';

type UICreateItemButtonProps = Omit<ComponentProps<typeof UIButton>, 'children'>;

export const UICreateItemButton = (props: UICreateItemButtonProps) => {
	return <UIButton {...props}>Create item</UIButton>;
};
