import { MouseEventHandler } from 'react';
import { ProductItemImage } from './ProductItemImage';
import { UIProductItemAddToFavorite } from './UI/UIProductItemAddToFavorite';
import { UIProductItemBadges } from './UI/UIProductItemBadges';
import { UIProductItemCover } from './UI/UIProductItemCover';
import { Item } from '../../types';

interface ProductItemCoverProps {
	item: Item;
	onAddClick: MouseEventHandler<HTMLDivElement>;
	onDeleteClick: MouseEventHandler<HTMLDivElement>;
	imageURL: string;
}

export const ProductItemCover = ({
	item,
	onAddClick,
	onDeleteClick,
	imageURL,
}: ProductItemCoverProps) => {
	return (
		<UIProductItemCover>
			<ProductItemImage imageURL={imageURL} label={item.label} />
			<UIProductItemAddToFavorite
				isFavorite={item.favoriteId ? true : false}
				onAddClick={onAddClick}
				onDeleteClick={onDeleteClick}
			/>
			<UIProductItemBadges
				isBestseller={item.isBestseller}
				isSecretbox={item.isSecretbox}
			/>
		</UIProductItemCover>
	);
};
