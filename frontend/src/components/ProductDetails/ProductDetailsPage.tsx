import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectAllItems } from '../../store/itemSelectors';
import { useParams } from 'react-router';
import { fetchItems } from '../../store/itemSlice';
import ProductDetailsDropdown from './ProductDetailsDropdown';
import ProductRating from '../ProductItem/ProductRating';
import { ProductDetailsImages } from './ProductDetailsImages';

export const ProductDetailsPage: FC = () => {
	const dispatch = useAppDispatch();

	const { product: product_page_link } = useParams();

	const items = useSelector(selectAllItems);

	const item = items.find((item) => item.pageLink == `/${product_page_link}`);

	const itemDetails = item?.itemDetails;

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
					<div className='flex flex-col md:mt-20'>
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
				</div>
			)}
		</>
	);
};
