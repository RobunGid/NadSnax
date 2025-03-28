import clsx from 'clsx';
import { ReactNode } from 'react';

interface AccountMenuCardProps {
	children: ReactNode;
	className?: string;
}

export const AccountMenuCard = ({ children, className }: AccountMenuCardProps) => {
	return (
		<div
			className={clsx('shadow-xl dark:shadow-gray-950 rounded-3xl p-4', className)}
		>
			{children}
		</div>
	);
};
