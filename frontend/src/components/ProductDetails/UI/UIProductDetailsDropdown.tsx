import clsx from 'clsx';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface UIProductDetailsDropdownProps {
	className?: string;
	text?: string;
	optionsVisibility: boolean;
	handleToggleVisibility: MouseEventHandler<HTMLDivElement>;
}

export const UIProductDetailsDropdown = ({
	className,
	text,
	optionsVisibility,
	children,
	handleToggleVisibility,
}: PropsWithChildren<UIProductDetailsDropdownProps>) => {
	return (
		<div className={className}>
			<div
				className='flex flex-row cursor-pointer items-center my-2'
				onClick={handleToggleVisibility}
			>
				<IoIosArrowDown
					className={clsx(
						'transition-transform duration-300 origin-center -rotate-90',
						optionsVisibility && 'rotate-0'
					)}
					size='20'
				/>
				<span className='ms-1'>{text}</span>
			</div>

			<div
				className={clsx(
					'transition-all duration-300 pl-3 mt-1 mb-2 overflow-hidden text-gray-500',
					optionsVisibility ? 'max-h-80' : 'max-h-0'
				)}
			>
				{children}
			</div>
		</div>
	);
};
