import { Item } from '../../types';
import { Link } from 'react-router';
import { ProductRating } from './ProductRating';

import { GiStarFormation } from 'react-icons/gi';

import ProductItemQuantityChooser from './ProductItemQuantityChooser';
import { FC } from 'react';

type ProductItemProps = {
	item: Item;
	className?: string;
	hideAddButton?: boolean;
};

const ProductItem: FC<ProductItemProps> = ({ item, className, hideAddButton }) => {
	const mainImage = item.images.find((image) => image.isMain);

	let imageURL = '';

	if (mainImage) {
		imageURL = mainImage.url;
	} else {
		imageURL = item.images[0].url;
	}

	const productPrice =
		item.price &&
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		}).format(item.price);

	const productOldPrice =
		item.oldPrice &&
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		}).format(item.oldPrice);

	console.log(item);

	return (
		<Link to={`/products/page${item.pageLink}`} className={className}>
			<div className='relative z-0 overflow-hidden'>
				{item.isBestseller && (
					<div className='absolute bg-blue-200 px-2 bg-opacity-70 text-blue-900 font-bold w-40 text-center rotate-[-45deg] top-[25px] left-[-45px]'>
						Bestseller
					</div>
				)}
				{item.category.name === 'secretboxes' && (
					<div className='absolute bg-purple-300 px-2 bg-opacity-70 text-purple-900 font-bold w-40 text-center rotate-[-45deg] top-[25px] left-[-45px]'>
						Secret Box
					</div>
				)}
				<img
					src={imageURL}
					alt={`${item.label} image`}
					className='object-cover w-[240px] h-[240px]'
				/>

				{!hideAddButton && <ProductItemQuantityChooser item={item} />}
				<div className='flex gap-x-2 items-center'>
					{productOldPrice ? (
						<>
							<div className='font-bold text-xl text-lime-600'>
								Now {productPrice}
							</div>
							<div className='font-bold text-md text-gray-500 line-through'>
								{productOldPrice}
							</div>
						</>
					) : (
						<div className='font-bold text-xl'>{productPrice}</div>
					)}
				</div>
				<div
					className='text-gray-500 w-52 text-sm truncate'
					title={item.description}
				>
					{item.description}
				</div>
				<div className='flex space-x-2'>
					<div>{item.label}</div>
					{item.isBestseller && <GiStarFormation className='text-amber-400' />}
				</div>
				<div className='flex justify-start'>
					<ProductRating
						rating={item.averageRating}
						size='16'
						className='flex text-yellow-400'
					/>
					<span className='text-gray-500 text-[0.75rem]'>
						{item.ratingCount || 0}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
