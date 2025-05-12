import { ProductItemImage } from './ProductItemImage';
import { UIProductItemBadges } from './UI/UIProductItemBadges';
import { UIProductItemCover } from './UI/UIProductItemCover';

interface ProductItemCoverProps {
	imageURL: string;
	label: string;
	isBestseller: boolean;
	isSecretbox: boolean;
}

export const ProductItemCover = ({
	imageURL,
	label,
	isBestseller,
	isSecretbox,
}: ProductItemCoverProps) => {
	return (
		<UIProductItemCover>
			<ProductItemImage imageURL={imageURL} label={label} />
			<UIProductItemBadges isBestseller={isBestseller} isSecretbox={isSecretbox} />
		</UIProductItemCover>
	);
};
