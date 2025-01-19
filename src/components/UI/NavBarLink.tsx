import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router';

type NavBarLinkProps = {
	children?: ReactNode;
	to: string;
	className?: string;
	id?: string;
	text?: string;
};

export const NavBarLink: FC<NavBarLinkProps> = ({
	children,
	to,
	className,
	id,
	text,
}) => {
	return (
		<NavLink
			id={id}
			to={to}
			className={({ isActive }) =>
				clsx('group flex', isActive && 'active', className)
			}
		>
			<div className='group-[.active]:underline group-[.active]:underline-offset-[5px] group-[.active]:text-slate-900 group-hover:text-slate-800 text-slate-500 group-[.active]:group-hover:decoration-2'>
				{text}
			</div>
			{children}
		</NavLink>
	);
};
