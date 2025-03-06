import { FC, useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectAllItems } from '../../store/itemSelectors';
import { useParams } from 'react-router';
import { fetchItems } from '../../store/itemSlice';
import ProductDetailsDropdown from './ProductDetailsDropdown';
import ProductRating from '../ProductItem/ProductRating';
import { ProductDetailsImages } from './ProductDetailsImages';
import { selectItemById } from '../../store/cartSelectors';

import { Item } from '../../types';
import { ProductDetailsPageQuantityChooser } from './ProductDetailsPageQuantityChooser';

function assertItem(item: Item | undefined): asserts item is Item {
	if (!item) throw new Error('Item not found');
}

export const ProductDetailsPage: FC = () => {
	const { product: product_page_link } = useParams();

	const items = useSelector(selectAllItems);

	const item = items.find((item) => item.pageLink == `/${product_page_link}`);

	assertItem(item);

	const itemDetails = item.itemDetails;

	const productCart = useSelector((state: RootState) => selectItemById(state, item.id));
	const count = productCart?.count || 0;

	const dispatch = useAppDispatch();

	const intlFormatPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	});

	const formattedPrice = intlFormatPrice.format(item.price);
	const formattedOldPrice = intlFormatPrice.format(item.oldPrice || item.price);

	useEffect(() => {
		dispatch(
			fetchItems({
				page_link: `/${product_page_link}`,
				include_item_details: true,
				include_category: true,
				include_type: true,
				include_images: true,
			})
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [product_page_link]);
	return (
		<>
			{!itemDetails && <div>Sorry, product not found</div>}
			{itemDetails && (
				<div className='p-3 flex flex-row gap-10 mt-16 flex-wrap justify-center md:justify-start'>
					<ProductDetailsImages className='ml-8' images={item.images} />
					<div className='flex flex-col md:mt-20 w-64'>
						<div>
							<a
								href={
									'https://google.com' /* !!!TODO!!! item.itemDetails.supplierLink*/
								}
								target='_blank'
								className='font-thin underline underline-offset-2'
							>
								Visit the supplier site
							</a>
						</div>
						<div>{itemDetails.fullLabel}</div>
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
									{itemDetails.fullDescription}
								</div>
							</ProductDetailsDropdown>

							<hr />

							<ProductDetailsDropdown text='Ingridients' className='my-3'>
								<div className='text-gray-500'>
									{itemDetails.ingridients}
								</div>
							</ProductDetailsDropdown>

							<hr />

							<ProductDetailsDropdown text='Supplier' className='my-3'>
								<div className='text-gray-500'>
									{itemDetails.supplier}
								</div>
							</ProductDetailsDropdown>

							<hr />

							<ProductDetailsDropdown text='Nutrition' className='my-3'>
								<div className='text-gray-500'>
									{itemDetails.nutrition}
								</div>
							</ProductDetailsDropdown>

							<hr />
						</div>
					</div>
					<div>
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
							<div>{formattedPrice}</div>
						)}

						<ProductDetailsPageQuantityChooser item={item} count={count} />
					</div>
				</div>
			)}
		</>
	);
};
