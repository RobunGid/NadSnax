import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router';

type SideBarLinkProps = {
	children?: ReactNode;
	to: string;
	className?: string;
	id?: string;
	text?: string;
	isIconOnRight?: boolean;
};

export const SideBarLink: FC<SideBarLinkProps> = ({
	children,
	to,
	className,
	id,
	text,
	isIconOnRight = true,
}) => {
	return (
		<NavLink
			id={id}
			to={to}
			className={({ isActive }) =>
				clsx('group flex', isActive && 'active', className)
			}
		>
			{!isIconOnRight && children}
			<div className='font-medium group-[.active]:underline group-[.active]:underline-offset-[5px] group-[.active]:text-gray-900 group-hover:text-gray-800 text-gray-500 group-[.active]:group-hover:decoration-2'>
				{text}
			</div>
			{isIconOnRight && children}
		</NavLink>
	);
};
