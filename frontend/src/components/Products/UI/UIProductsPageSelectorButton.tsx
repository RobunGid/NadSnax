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
				'w-10 h-10 border-4 rounded-full',
				isCurrent && 'border-red-800'
			)}
		>
			{pageNumber}
		</button>
	);
};
