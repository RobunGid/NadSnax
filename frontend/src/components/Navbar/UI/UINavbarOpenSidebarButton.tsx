import { MouseEventHandler, RefObject } from 'react';
import { MdMenu } from 'react-icons/md';

interface UINavbarOpenSidebarButtonProps {
	onClick: MouseEventHandler<HTMLButtonElement>;
	ref: RefObject<HTMLButtonElement | null>;
}
export const UINavbarOpenSidebarButton = ({
	onClick,
	ref,
}: UINavbarOpenSidebarButtonProps) => {
	return (
		<button
			className='lg:hidden ml-3 text-gray-400 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white peer'
			type='button'
			onClick={onClick}
			ref={ref}
		>
			<span className='sr-only'>Open sidebar panel</span>
			<MdMenu />
		</button>
	);
};
