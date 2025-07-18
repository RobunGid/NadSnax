import clsx from 'clsx';
import { ReactNode } from 'react';
import { createItemFormConfig } from '../../../../logic/createItemFormConfig';

interface UICreateItemFieldsetProps {
	children: ReactNode;
	type?: keyof typeof createItemFormConfig;
}

export const UICreateItemFieldset = ({ children, type }: UICreateItemFieldsetProps) => {
	return (
		<fieldset
			className={clsx(
				'grid gap-2 sm:grid-cols-2 border-2 border-gray-700 p-2 grid-cols-1',
				type === 'general' && 'sm:grid-cols-[2fr_1fr]'
			)}
		>
			{children}
		</fieldset>
	);
};
