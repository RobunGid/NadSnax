import clsx from 'clsx';
import { FC } from 'react';

interface ThemeSwitcherProps {
	className: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	return (
		<div className='flex items-center'>
			<label className={clsx('relative inline-block w-14 h-8', className)}>
				<input type='checkbox' className='opacity-0 w-0 h-0 peer' />
				<span className='peer-checked:bg-amber-500 peer-focus:shadow-sm peer-checked:before:translate-x-6 rounded-3xl before:rounded-2xl absolute cursor-pointer inset-0 bg-gray-500 transition before:absolute before:h-6 before:w-6 before:left-1 before:bottom-1 before:bg-white before:transition' />
			</label>
			<div className='dark:text-white text-xs'>Change App Theme</div>
		</div>
	);
};
