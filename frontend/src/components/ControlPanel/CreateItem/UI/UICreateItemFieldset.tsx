import clsx from 'clsx';
import { ReactNode } from 'react';

interface UICreateItemFieldsetProps {
	children: ReactNode;
	type?: 'general';
}

export const UICreateItemFieldset = ({ children, type }: UICreateItemFieldsetProps) => {
	return (
		<fieldset
			className={clsx(
				'grid gap-2 sm:grid-cols-2',
				type == 'general' && 'sm:grid-cols-[2fr_1fr]'
			)}
		>
			{children}
		</fieldset>
	);
};
