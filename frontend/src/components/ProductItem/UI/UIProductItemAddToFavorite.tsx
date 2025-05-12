import clsx from 'clsx';
import { MouseEventHandler } from 'react';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';

interface UIProductItemAddToFavoriteProps {
	isFavorite: boolean;
	onAddClick: MouseEventHandler<HTMLDivElement>;
	onDeleteClick: MouseEventHandler<HTMLDivElement>;
}

export const UIProductItemAddToFavorite = ({
	isFavorite,
	onAddClick,
	onDeleteClick,
}: UIProductItemAddToFavoriteProps) => {
	return (
		<div
			className={clsx('absolute top-2 right-8 group')}
			onClick={isFavorite ? onDeleteClick : onAddClick}
		>
			<BiHeart
				className={clsx(
					'transition-all duration-200 drop-shadow-black drop-shadow-md absolute',
					isFavorite
						? 'scale-0 group-hover:scale-100'
						: 'scale-100 group-hover:scale-0'
				)}
			/>
			<BiSolidHeart
				className={clsx(
					'text-red-600 transition-all duration-200 absolute drop-shadow-black drop-shadow-md',
					isFavorite
						? 'opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0'
						: 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-110'
				)}
			/>
		</div>
	);
};
