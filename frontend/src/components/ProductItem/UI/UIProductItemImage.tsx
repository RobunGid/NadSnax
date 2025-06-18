import clsx from 'clsx';
import { ReactEventHandler } from 'react';

interface UIProductItemImageProps {
	imageURL: string;
	label: string;
	onError?: ReactEventHandler<HTMLImageElement>;
	className?: string;
}

export const UIProductItemImage = ({
	imageURL,
	label,
	onError,
	className,
}: UIProductItemImageProps) => {
	return (
		<img
			src={imageURL}
			alt={`${label} image`}
			className={(clsx('object-cover w-[240px] h-[240px] rounded-md'), className)}
			onError={onError}
		/>
	);
};
