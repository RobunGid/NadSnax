import { ReactNode } from 'react';
import { UIAccountMenuItem } from '../UI/UIAccountMenuItem';
import clsx from 'clsx';

interface AccountMenuItemProps {
	children: ReactNode;
	className?: string;
	to: string;
	isLast?: boolean;
}
export const AccountMenuItemContainer = ({
	children,
	className,
	to,
	isLast,
}: AccountMenuItemProps) => {
	return (
		<li className={clsx('', className)}>
			<UIAccountMenuItem to={to} isLast={isLast}>
				{children}
			</UIAccountMenuItem>
		</li>
	);
};
