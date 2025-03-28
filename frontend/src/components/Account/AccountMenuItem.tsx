import { ReactNode } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router';

interface AccountMenuItemProps {
	children: ReactNode;
	className?: string;
	to: string;
	last?: boolean;
}

export const AccountMenuItem = ({
	children,
	className,
	to,
	last,
}: AccountMenuItemProps) => {
	return (
		<li
			className={clsx(
				'hover:bg-gray-700',
				className,
				last && 'rounded-b-[40px] pb-1'
			)}
		>
			<NavLink
				className={clsx('w-full flex py-4 px-8 gap-2 shadow-gray-950 ')}
				to={to}
			>
				{children}
			</NavLink>
		</li>
	);
};
