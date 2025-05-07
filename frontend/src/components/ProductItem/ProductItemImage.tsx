import { useState } from 'react';
import { UIProductItemImage } from './UI/UIProductItemImage';
import { UIProductItemErrorImage } from './UI/UIProductItemErrorImage';

interface ProductItemImageProps {
	isSecretbox: boolean;
	isBestseller: boolean;
	imageURL: string;
	label: string;
}

export const ProductItemImage = ({
	isSecretbox,
	isBestseller,
	imageURL,
	label,
}: ProductItemImageProps) => {
	const [error, setError] = useState(false);
	return error || !imageURL ? (
		<UIProductItemErrorImage label={label} />
	) : (
		<UIProductItemImage
			imageURL={imageURL}
			isBestseller={isBestseller}
			isSecretbox={isSecretbox}
			label={label}
			onError={() => setError(true)}
		/>
	);
};
