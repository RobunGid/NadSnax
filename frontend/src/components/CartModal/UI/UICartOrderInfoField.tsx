import clsx from 'clsx';
import { ReactNode } from 'react';

interface UICartOrderInfoFieldProps {
	children: ReactNode;
	type?: 'end' | 'start';
}

export const UICartOrderInfoField = ({ children, type }: UICartOrderInfoFieldProps) => {
	return (
		<div
			className={clsx(type == 'end' && 'text-end', type == 'start' && 'text-start')}
		>
			{children}
		</div>
	);
};
