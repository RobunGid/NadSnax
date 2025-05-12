import { ProductItemImage } from './ProductItemImage';
import { UIProductItemBadges } from './UI/UIProductItemBadges';

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
		<div className='relative overflow-hidden'>
			<ProductItemImage imageURL={imageURL} label={label} />
			<UIProductItemBadges isBestseller={isBestseller} isSecretbox={isSecretbox} />
		</div>
	);
};
