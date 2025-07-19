import { ReactNode } from 'react';

interface UICreateItemLegendProps {
	children: ReactNode;
}

export const UICreateItemLegend = ({ children }: UICreateItemLegendProps) => {
	return <legend className='p-1 font-bold text-lg flex gap-3'>{children}</legend>;
};
