import { ReactNode } from 'react';

interface UICreateItemLegendProps {
	children: ReactNode;
}

export const UICreateItemLegend = ({ children }: UICreateItemLegendProps) => {
	return <legend className='p-3 font-bold text-lg'>{children}</legend>;
};
