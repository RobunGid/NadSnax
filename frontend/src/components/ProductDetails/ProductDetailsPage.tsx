import { FC, useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectAllItems } from '../../store/itemSelectors';
import { useParams } from 'react-router';
import { fetchItems } from '../../store/itemSlice';
import { ProductDetailsDropdown } from './ProductDetailsDropdown';
import { ProductRating } from '../ProductItem/ProductRating';
import { ProductDetailsImages } from './ProductDetailsImages';
import { selectItemById } from '../../store/cartSelectors';

import { ProductDetailsPageQuantityChooser } from './ProductDetailsPageQuantityChooser';
import { AddToFavourite } from '../layout/AddToFavourite';
import { SimillarItems } from './SimillarItems';

export const ProductDetailsPage: FC = () => {
	const { product: product_page_link } = useParams();

	const dispatch = useAppDispatch();

	const items = useSelector(selectAllItems);

	const item = items.find((item) => item.pageLink == `/${product_page_link}`);

	useEffect(() => {
		dispatch(
			fetchItems({
				include_item_details: true,
				include_category: true,
				include_type: true,
				include_images: true,
				simillar_id: item?.id,
			})
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item?.id]);

	const productCart = useSelector((state: RootState) =>
		selectItemById(state, item?.id || '')
	);
	const count = productCart?.count || 0;

	const intlFormatPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	});

	const formattedPrice = intlFormatPrice.format(item?.price || 0);
	const formattedOldPrice = intlFormatPrice.format(item?.oldPrice || item?.price || 0);

	return (
		<>
			{!item && <div>Sorry, product not found</div>}
			{item && (
				<div className='p-3 flex flex-row gap-10 mt-16 flex-wrap justify-center md:justify-start'>
					<ProductDetailsImages className='md:ml-8' images={item.images} />
					<div className='flex flex-col md:mt-20 w-64'>
						<div>
							<a
								href={item?.itemDetails?.supplierLink}
								target='_blank'
								className='font-thin underline underline-offset-2'
							>
								Visit the supplier site
							</a>
						</div>
						<div>{item?.itemDetails?.fullLabel}</div>
						<div className='flex'>
							<ProductRating
								rating={item.averageRating}
								className='flex text-yellow-500'
							/>
							<div>{item.ratingCount}</div>
						</div>
						<div className='md:mt-14 mt-6'>
							<hr />
							<ProductDetailsDropdown
								text='About this item'
								className='my-3'
							>
								<div className='text-gray-500'>
									{item?.itemDetails?.fullDescription}
								</div>
							</ProductDetailsDropdown>

							<hr />

							<ProductDetailsDropdown text='Ingridients' className='my-3'>
								<div className='text-gray-500'>
									{item?.itemDetails?.ingridients}
								</div>
							</ProductDetailsDropdown>

							<hr />

							<ProductDetailsDropdown text='Supplier' className='my-3'>
								<div className='text-gray-500'>
									{item?.itemDetails?.supplier}
								</div>
							</ProductDetailsDropdown>

							<hr />

							<ProductDetailsDropdown text='Nutrition' className='my-3'>
								<div className='text-gray-500'>
									{item?.itemDetails?.nutrition}
								</div>
							</ProductDetailsDropdown>

							<hr />
						</div>
					</div>
					<div className='md:my-44'>
						{formattedPrice !== formattedOldPrice ? (
							<div className='flex gap-2 justify-center items-center'>
								<div className='font-bold text-xl text-lime-600'>
									Now {formattedPrice}
								</div>
								<div className='font-bold text-md text-gray-500 line-through'>
									{formattedOldPrice}
								</div>
							</div>
						) : (
							<div className='font-bold text-xl text-center'>
								{formattedPrice}
							</div>
						)}

						<ProductDetailsPageQuantityChooser item={item} count={count} />

						<hr className='my-4' />

						<AddToFavourite />
					</div>
				</div>
			)}
			<hr className='my-4' />
			<div className='m-5'>
				<span className='text-2xl font-bold'>Simillar items you might like</span>
				<SimillarItems
					items={items.filter((simmilarItem) => simmilarItem != item)}
				/>
			</div>
		</>
	);
};
