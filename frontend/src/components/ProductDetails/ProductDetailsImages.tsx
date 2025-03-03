import { FC, Fragment } from 'react';
import classes from './ProductDetailsImages.module.css';
import clsx from 'clsx';

type image = {
	src: string;
	alt: string;
	id: string;
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

interface ProductDetailsImagesProps {
	images: image[];
	className?: string;
}

export const ProductDetailsImages: FC<ProductDetailsImagesProps> = ({
	images,
	className,
}) => {
	return (
		<div
			className={clsx(
				className,
				classes.gallery,
				'grid grid-cols-[100px_500px] grid-rows-4 gap-5'
			)}
		>
			{images.map((image, index) => (
				<Fragment key={image.id}>
					<input
						type='radio'
						defaultChecked={true}
						name='select'
						id={`img-tab-${index}`}
						className='hidden peer'
					/>
					<label
						htmlFor={`img-tab-${index}`}
						style={{ backgroundImage: `url(${image.src})` }}
						className='block cursor-pointer bg-no-repeat bg-cover position bg-center rounded-md'
					></label>
					<div className='hidden col-start-2 col-end-2 row-start-1 row-end-5'>
						<img src={image.src} />
					</div>
				</Fragment>
			))}
		</div>
	);
};
