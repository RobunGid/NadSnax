import { ReactNode } from 'react';

interface UICreateItemSectionContainerProps {
	children: ReactNode;
}

export const UICreateItemSectionContainer = ({
	children,
}: UICreateItemSectionContainerProps) => {
	return <div>{children}</div>;
};
