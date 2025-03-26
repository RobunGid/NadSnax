import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectAllItems, selectItemByPageLink } from '../../store/itemSelectors';
import { useParams } from 'react-router';
import { fetchItems } from '../../store/itemSlice';
import { ProductDetailsDropdown } from '../ProductDetails/ProductDetailsDropdown';
import { ProductRating } from '../ProductItem/ProductRating';
import { ProductDetailsImages } from '../ProductDetails/ProductDetailsImages';
import { selectItemFromCartById } from '../../store/cartSelectors';

import { ProductDetailsQuantityChooser } from '../ProductDetails/ProductDetailsQuantityChooser';
import { AddToFavourite } from '../layout/AddToFavourite';
import { SimillarItems } from '../ProductDetails/SimillarItems';
import { useItemQuantityChooser } from '../../hooks/useItemQuantityChooser';

export const ProductDetailsPage = () => {
	const { product: product_page_link } = useParams();

	const dispatch = useAppDispatch();

	const items = useSelector((state: RootState) => selectAllItems(state));

	const item = useSelector((state: RootState) =>
		selectItemByPageLink(state, `/${product_page_link}`)
	);

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

	const cartItem = useSelector((state: RootState) =>
		selectItemFromCartById(state, item?.id || '')
	);

	const { handleAddItemToCart, handleRemoveProductFromCart, handleInputChange } =
		useItemQuantityChooser({ item });

	const intlFormatPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	});

	const formattedPrice = intlFormatPrice.format(item?.price || 0);
	const formattedOldPrice = intlFormatPrice.format(item?.oldPrice || item?.price || 0);

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
									<ProductDetailsQuantityChooser
										cartItem={cartItem}
										item={item}
										onAdd={handleAddItemToCart}
										onInputChange={handleInputChange}
										onDelete={handleRemoveProductFromCart}
									/>

									<hr className='my-4' />

									<AddToFavourite />
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

							{formattedPrice !== formattedOldPrice ? (
								<div className='flex gap-2 mt-4 -mb-4 md:-mb-8 items-center'>
									<div className='font-bold text-xl text-lime-600'>
										Now {formattedPrice}
									</div>
									<div className='font-bold text-md text-gray-500 line-through'>
										{formattedOldPrice}
									</div>
								</div>
							) : (
								<div className='font-bold text-xl -mb-4 mt-4 -md:mb-8'>
									{formattedPrice}
								</div>
							)}

							<div className='md:mt-14 mt-6 space-y-3 md:h-80'>
								<div className='hidden md:block'>
									<ProductDetailsQuantityChooser
										className='flex justify-center'
										cartItem={cartItem}
										item={item}
										onAdd={handleAddItemToCart}
										onInputChange={handleInputChange}
										onDelete={handleRemoveProductFromCart}
									/>

									<AddToFavourite />
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
				<SimillarItems
					items={items.filter((simmilarItem) => simmilarItem != item)}
				/>
			</div>
		</div>
	);
};
