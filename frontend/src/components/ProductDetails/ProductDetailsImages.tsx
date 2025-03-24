import { Fragment } from 'react';
import classes from './ProductDetailsImages.module.css';
import clsx from 'clsx';
import { Image } from '../../types';

interface ProductDetailsImagesProps {
	images: Image[];
	className?: string;
}

export const ProductDetailsImages = ({
	images,
	className,
}: ProductDetailsImagesProps) => {
	return (
		<div
			className={clsx(
				className,
				classes.gallery,
				'grid md:grid-cols-[100px_500px] md:grid-rows-[100px_100px_100px_100px] gap-5 grid-rows-[350px_65px] grid-cols-[repeat(4,_65px)] '
			)}
		>
			{images.map((image, index) => (
				<Fragment key={image.id}>
					<input
						type='radio'
						defaultChecked={index === 0}
						name='select'
						id={`img-tab-${index}`}
						className='hidden peer'
					/>
					<label
						htmlFor={`img-tab-${index}`}
						style={{ backgroundImage: `url(${image.url})` }}
						className='block cursor-pointer bg-no-repeat bg-cover position bg-center rounded-md transition-transform shadow-sm shadow-black'
					></label>
					<div className='opacity-0 transition-opacity md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-5 col-start-1 col-end-5 row-start-1 row-end-1'>
						<img src={image.url} />
					</div>
				</Fragment>
			))}
		</div>
	);
};
