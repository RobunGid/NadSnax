import clsx from 'clsx';
import { GoChevronDown } from 'react-icons/go';
import { NavLink } from 'react-router';

type UINavbarItemProps = {
	to: string;
	id?: string;
	text?: string;
	iconPosition?: 'left' | 'right';
	precise?: boolean;
	textWrap?: boolean;
};

export const UINavbarItem = ({
	to,
	id,
	text,
	iconPosition,
	precise,
	textWrap,
}: UINavbarItemProps) => {
	return (
		<NavLink
			end={precise}
			id={id}
			to={to}
			className={({ isActive }) => clsx('group flex peer', isActive && 'active')}
		>
			<div
				className={clsx(
					`px-3 font-medium group-[.active]:underline group-[.active]:underline-offset-[5px] group-[.active]:text-gray-900 group-hover:text-gray-800
			text-gray-500 group-[.active]:group-hover:decoration-2 dark:group-[.active]:text-gray-500 dark:group-hover:text-gray-400 dark:text-gray-300
			flex items-center justify-center `,
					textWrap ? 'text-wrap' : 'text-nowrap',
					iconPosition == 'right' && 'pl-4 pr-2'
				)}
			>
				{iconPosition == 'left' && (
					<GoChevronDown className='inline-block bg-transparent' size='20px' />
				)}
				{text}
				{iconPosition == 'right' && (
					<GoChevronDown className='inline-block bg-transparent' size='20px' />
				)}
			</div>
		</NavLink>
	);
};
