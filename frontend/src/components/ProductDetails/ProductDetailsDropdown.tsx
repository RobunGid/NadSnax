import clsx from 'clsx';
import { MouseEventHandler, ReactNode, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface ProductDetailsDropdownProps {
	children?: ReactNode;
	text?: string;
	className?: string;
}

export const ProductDetailsDropdown = ({
	children,
	text,
	className,
}: ProductDetailsDropdownProps) => {
	const [optionsVisibility, setOptionsVisibility] = useState<boolean>(false);

	const handleToggleVisibility: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		event.stopPropagation();
		setOptionsVisibility((prevVisible) => !prevVisible);
	};

	return (
		<div className={className}>
			<div
				className='flex flex-row cursor-pointer items-center'
				onClick={handleToggleVisibility}
			>
				<IoIosArrowDown
					className={clsx(
						'transition-transform duration-300 origin-center -rotate-90',
						optionsVisibility && 'rotate-0'
					)}
					size='20'
				/>
				<span className='ml-1'>{text}</span>
			</div>

			<div
				className={clsx(
					'transition-all duration-300 pl-3 overflow-hidden',
					optionsVisibility ? 'max-h-80' : 'max-h-0'
				)}
			>
				{children}
			</div>
		</div>
	);
};
