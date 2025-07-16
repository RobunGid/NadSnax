import { ReactNode } from 'react';

interface UICreateItemFormProps {
	children: ReactNode;
}

export const UICreateItemForm = ({ children }: UICreateItemFormProps) => {
	return <div>{children}</div>;
};
