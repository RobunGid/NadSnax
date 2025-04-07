import { MouseEventHandler } from 'react';
import { GoArrowLeft } from 'react-icons/go';

interface UISidebarCloseMenuButton {
	onClick: MouseEventHandler<HTMLButtonElement>;
}

export const UISidebarCloseMenuButton = ({ onClick }: UISidebarCloseMenuButton) => {
	return (
		<button
			type='button'
			className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
			onClick={onClick}
		>
			<GoArrowLeft />
			<span className='sr-only'>Close menu</span>
		</button>
	);
};
