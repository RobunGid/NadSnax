import clsx from 'clsx';
import { MouseEventHandler } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

interface UIProductDetailsGalleryScrollButtonProps {
	onClick: MouseEventHandler<HTMLButtonElement>;
	type: 'up' | 'down';
	className?: string;
	visibility?: boolean;
}

export const UIProductDetailsGalleryScrollButton = ({
	onClick,
	type,
	className,
	visibility,
}: UIProductDetailsGalleryScrollButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={clsx(
				'hover:scale-120 transition-transform',
				className,
				!visibility && 'opacity-0 pointer-events-none'
			)}
		>
			{type === 'down' ? (
				<IoMdArrowDropdown size='40' className='-rotate-90 md:rotate-0' />
			) : (
				<IoMdArrowDropup size='40' className='-rotate-90 md:rotate-0' />
			)}
		</button>
	);
};
