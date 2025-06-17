import clsx from 'clsx';
import { ReactNode } from 'react';

interface UICartOrderInfoTitleProps {
	children: ReactNode;
	size?: 'big' | 'medium' | 'small';
}

export const UICartOrderInfoTitle = ({ children, size }: UICartOrderInfoTitleProps) => {
	return (
		<div className={clsx(size == 'big' && 'text-lg', size == 'medium' && 'text-md')}>
			{children}
		</div>
	);
};
