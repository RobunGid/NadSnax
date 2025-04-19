import { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchItemsThunk, itemActions } from '../../store/itemSlice';
import { ProductDetailsDropdown } from '../ProductDetails/ProductDetailsDropdown';
import { ProductRating } from '../Layout/ProductRating';
import { ProductDetailsImages } from '../ProductDetails/ProductDetailsImages';
import { cartActions, useActionCreators, useStateSelector } from '../../store';
import { UIProductDetailsAddToFavourite } from '../ProductDetails/UI/UIProductDetailsAddToFavourite';
import { ProductsList } from '../Products/ProductsList';
import { formatPrice } from '../../logic/formatPrice';
import { UIProductDetailsPrice } from '../ProductDetails/UI/UIProductDetailsPrice';
import { ProductDetailsQuantityChooser } from '../ProductDetails/ProductDetailsQuantityChooser';

export const ProductDetailsPage = () => {
	const { product: product_page_link } = useParams();

	const actions = useActionCreators({
		...itemActions,
		...cartActions,
		fetchItems: fetchItemsThunk,
	});

	const items = useStateSelector((state) => state.item.itemList);

	const status = useStateSelector((state) => state.item.status);

	const item = items.find((item) => item.pageLink == `/${product_page_link}`);

	useEffect(() => {
		if (status === 'init') {
			actions.fetchItems({
				include_item_details: true,
				include_category: true,
				include_type: true,
				include_images: true,
				simillar_id: item?.id,
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item?.id]);

	const formattedPrice = formatPrice(item?.price || 0);
	const formattedOldPrice = formatPrice(item?.oldPrice || item?.price || 0);

	return (
		<div>
			{!item && <div>Sorry, product not found</div>}
			{item && (
				<>
					<div className='p-3 flex flex-row gap-10 pt-16 flex-wrap justify-center md:justify-start dark:text-gray-200'>
						<div>
							<ProductDetailsImages
								className='md:ml-8'
								images={item.images}
							/>
							<div className='md:hidden mr-auto'>
								<div className='flex justify-center flex-col w-52 mx-16 my-8'>
									<hr className='my-4' />

									<UIProductDetailsAddToFavourite />
								</div>
							</div>
						</div>
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
							<div className='text-nowrap'>
								{item?.itemDetails?.fullLabel}
							</div>
							<div className='flex'>
								<ProductRating
									rating={item.averageRating}
									className='flex text-yellow-500'
								/>
								<div>{item.ratingCount}</div>
							</div>

							<UIProductDetailsPrice
								price={formattedPrice}
								oldPrice={formattedOldPrice}
							/>

							<div className='md:mt-14 mt-6 space-y-3 md:h-80'>
								<div className='hidden md:block'>
									<ProductDetailsQuantityChooser item={item} />

									<UIProductDetailsAddToFavourite />
								</div>
								<hr />
								<ProductDetailsDropdown text='About this item'>
									<div className='text-gray-500'>
										{item?.itemDetails?.fullDescription}
									</div>
								</ProductDetailsDropdown>

								<hr />

								<ProductDetailsDropdown text='Ingridients'>
									<div className='text-gray-500'>
										{item?.itemDetails?.ingridients}
									</div>
								</ProductDetailsDropdown>

								<hr />

								<ProductDetailsDropdown text='Supplier'>
									<div className='text-gray-500'>
										{item?.itemDetails?.supplier}
									</div>
								</ProductDetailsDropdown>

								<hr />

								<ProductDetailsDropdown text='Nutrition'>
									<div className='text-gray-500'>
										{item?.itemDetails?.nutrition}
									</div>
								</ProductDetailsDropdown>
							</div>
						</div>
					</div>
				</>
			)}
			<div className='p-5'>
				<span className='text-2xl font-bold dark:text-gray-300'>
					Simillar items you might like
				</span>

				<div className='flex gap-4'>
					<ProductsList
						items={items.filter((simmilarItem) => simmilarItem != item)}
					/>
				</div>
			</div>
		</div>
	);
};
