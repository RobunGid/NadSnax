import { useState } from 'react';
import { UIProductItemImage } from './UI/UIProductItemImage';
import { UIProductItemErrorImage } from './UI/UIProductItemErrorImage';

interface ProductItemImageProps {
	imageURL: string;
	label: string;
}

export const ProductItemImage = ({ imageURL, label }: ProductItemImageProps) => {
	const [error, setError] = useState(false);
	return error || !imageURL ? (
		<UIProductItemErrorImage label={label} />
	) : (
		<UIProductItemImage
			imageURL={imageURL}
			label={label}
			onError={() => setError(true)}
		/>
	);
};
