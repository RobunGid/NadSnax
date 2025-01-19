import clsx from 'clsx';
import { FC } from 'react';
import { NavLink } from 'react-router';

type NavBarLinkProps = {
	text: string;
	to: string;
	className?: string;
	id?: string;
};

export const NavBarLink: FC<NavBarLinkProps> = ({ text, to, className, id }) => {
	return (
		<NavLink
			id={id}
			to={to}
			className={({ isActive }) =>
				clsx(
					`hover:border-b-[2px]  border-black text-sm`,
					isActive
						? 'border-b-[1px] border-black'
						: 'text-slate-400 hover:text-slate-600',
					className
				)
			}
		>
			{text}
		</NavLink>
	);
};
