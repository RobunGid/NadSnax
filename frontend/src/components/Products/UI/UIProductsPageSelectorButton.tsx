import clsx from 'clsx';
import { MouseEventHandler } from 'react';

interface UIProductsPageSelectorButton {
	pageNumber: number;
	onClick: MouseEventHandler<HTMLButtonElement>;
	isCurrent?: boolean;
}

export const UIProductsPageSelectorButton = ({
	pageNumber,
	onClick,
	isCurrent,
}: UIProductsPageSelectorButton) => {
	return (
		<button
			onClick={onClick}
			className={clsx(
				'w-16 h-16 font-bold text-lg rounded-full',
				isCurrent && 'border-sky-800 border-4'
			)}
		>
			{pageNumber}
		</button>
	);
};
