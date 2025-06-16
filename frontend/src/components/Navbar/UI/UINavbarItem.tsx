import clsx from 'clsx';
import { ReactNode } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { NavLink } from 'react-router';

type UINavbarItemProps = {
	children?: ReactNode;
	to: string;
	className?: string;
	id?: string;
	text?: string;
	iconPosition?: 'left' | 'right';
	precise?: boolean;
};

export const UINavbarItem = ({
	to,
	className,
	id,
	text,
	iconPosition,
	precise,
}: UINavbarItemProps) => {
	return (
		<NavLink
			end={precise}
			id={id}
			to={to}
			className={({ isActive }) =>
				clsx('group flex', isActive && 'active', className)
			}
		>
			<div
				className={`font-medium group-[.active]:underline group-[.active]:underline-offset-[5px] group-[.active]:text-gray-900 group-hover:text-gray-800
			text-gray-500 group-[.active]:group-hover:decoration-2 dark:group-[.active]:text-gray-500 dark:group-hover:text-gray-400 dark:text-gray-300
			px-4 flex items-center justify-center`}
			>
				{iconPosition == 'left' && (
					<GoChevronDown
						className='inline-block m-1 bg-transparent'
						size='20px'
					/>
				)}
				{text}
				{iconPosition == 'right' && (
					<GoChevronDown
						className='inline-block m-1 bg-transparent'
						size='20px'
					/>
				)}
			</div>
		</NavLink>
	);
};
