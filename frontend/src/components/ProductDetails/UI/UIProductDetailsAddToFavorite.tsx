import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';
import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIProductDetailsAddToFavoriteProps {
	className?: string;
	onAddClick?: MouseEventHandler<HTMLDivElement>;
	onDeleteClick?: MouseEventHandler<HTMLDivElement>;
	isFavorite?: boolean;
	translate: ReturnType<typeof useTranslate>;
}

export const UIProductDetailsAddToFavorite = withTranslate(
	({
		className,
		onAddClick,
		onDeleteClick,
		isFavorite,
		translate,
	}: UIProductDetailsAddToFavoriteProps) => {
		return (
			<div
				className={clsx(
					'flex gap-2 m-3 justify-center cursor-pointer transition-transform group',
					className
				)}
				onClick={isFavorite ? onDeleteClick : onAddClick}
			>
				<div className='relative w-6 h-6'>
					<BiHeart
						className={clsx(
							'absolute transition-all duration-200',
							isFavorite
								? 'scale-0 group-hover:scale-100'
								: 'scale-100 group-hover:scale-0'
						)}
					/>
					<BiSolidHeart
						className={clsx(
							'absolute text-red-600 transition-all duration-200',
							isFavorite
								? 'opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0'
								: 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-110'
						)}
					/>
				</div>

				<div className='group-hover:scale-105 transition-transform'>
					{isFavorite
						? translate('product_details.remove_from_favorite')
						: translate('product_details.add_to_favorite')}
				</div>
			</div>
		);
	}
);
