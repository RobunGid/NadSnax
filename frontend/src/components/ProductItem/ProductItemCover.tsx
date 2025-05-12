import { MouseEventHandler } from 'react';
import { ProductItemImage } from './ProductItemImage';
import { UIProductItemAddToFavorite } from './UI/UIProductItemAddToFavorite';
import { UIProductItemBadges } from './UI/UIProductItemBadges';
import { UIProductItemCover } from './UI/UIProductItemCover';

interface ProductItemCoverProps {
	imageURL: string;
	label: string;
	isBestseller: boolean;
	isSecretbox: boolean;
	isFavorite: boolean;
	onAddClick: MouseEventHandler<HTMLDivElement>;
	onDeleteClick: MouseEventHandler<HTMLDivElement>;
}

export const ProductItemCover = ({
	imageURL,
	label,
	isBestseller,
	isSecretbox,
	isFavorite,
	onAddClick,
	onDeleteClick,
}: ProductItemCoverProps) => {
	return (
		<UIProductItemCover>
			<ProductItemImage imageURL={imageURL} label={label} />
			<UIProductItemAddToFavorite
				isFavorite={isFavorite}
				onAddClick={onAddClick}
				onDeleteClick={onDeleteClick}
			/>
			<UIProductItemBadges isBestseller={isBestseller} isSecretbox={isSecretbox} />
		</UIProductItemCover>
	);
};
