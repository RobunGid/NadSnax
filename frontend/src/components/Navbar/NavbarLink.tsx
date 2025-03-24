import clsx from 'clsx';
import { ReactNode } from 'react';
import { NavLink } from 'react-router';

type NavBarLinkProps = {
	children?: ReactNode;
	to: string;
	className?: string;
	id?: string;
	text?: string;
	isIconOnRight?: boolean;
};

export const NavbarLink = ({
	children,
	to,
	className,
	id,
	text,
	isIconOnRight = true,
}: NavBarLinkProps) => {
	return (
		<NavLink
			id={id}
			to={to}
			className={({ isActive }) =>
				clsx('group flex', isActive && 'active', className)
			}
		>
			{!isIconOnRight && children}
			<div className='font-medium group-[.active]:underline group-[.active]:underline-offset-[5px] group-[.active]:text-gray-900 group-hover:text-gray-800 text-gray-500 group-[.active]:group-hover:decoration-2 dark:group-[.active]:text-gray-500 dark:group-hover:text-gray-400 dark:text-gray-300'>
				{text}
			</div>
			{isIconOnRight && children}
		</NavLink>
	);
};
