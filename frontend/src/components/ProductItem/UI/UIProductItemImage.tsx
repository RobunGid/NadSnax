import { ReactEventHandler } from 'react';

interface UIProductItemImageProps {
	imageURL: string;
	label: string;
	onError?: ReactEventHandler<HTMLImageElement>;
}

export const UIProductItemImage = ({
	imageURL,
	label,
	onError,
}: UIProductItemImageProps) => {
	return (
		<img
			src={imageURL}
			alt={`${label} image`}
			className='object-cover w-[240px] h-[240px] rounded-md'
			onError={onError}
		/>
	);
};
