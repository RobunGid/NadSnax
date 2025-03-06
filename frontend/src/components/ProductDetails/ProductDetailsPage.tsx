import { ChangeEvent, EventHandler, FC, MouseEventHandler, useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectAllItems } from '../../store/itemSelectors';
import { useParams } from 'react-router';
import { fetchItems } from '../../store/itemSlice';
import ProductDetailsDropdown from './ProductDetailsDropdown';
import ProductRating from '../ProductItem/ProductRating';
import { ProductDetailsImages } from './ProductDetailsImages';

import {
	addItemToCart,
	changeItemCount,
	removeItemFromCart,
} from '../../store/cartSlice';
import { selectItemById } from '../../store/cartSelectors';
import { FiPlus } from 'react-icons/fi';

export const ProductDetailsPage: FC = () => {
	const dispatch = useAppDispatch();

	const { product: product_page_link } = useParams();

	const items = useSelector(selectAllItems);

	const item = items.find((item) => item.pageLink == `/${product_page_link}`);

	const itemDetails = item?.itemDetails;

	let itemId = '';

	if (item) itemId = item.id;

	const handleInputChange: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
		if (Number.isNaN(parseInt(event.target.value))) return;
		dispatch(changeItemCount(item, parseFloat(event.target.value)));
	};

	const productCart = useSelector((state: RootState) => selectItemById(state, itemId));
	const count = productCart?.count || 0;

	const handleAddItemToCart: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = (
		event
	) => {
		event.preventDefault();
		dispatch(addItemToCart(item));
	};

	const handleRemoveProductFromCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		dispatch(removeItemFromCart(item));
	};

	const handleDivClick: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
	};

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
						{!count ? (
							<div
								className='bg-orange-400 flex w-[100px] absolute justify-center translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition hover:bg-orange-500 hover:scale-105'
								onClick={handleAddItemToCart}
							>
								<FiPlus />
								<button>Add</button>
							</div>
						) : (
							<div className='bg-orange-400 flex justify-center w-[100px] absolute translate-x-2 -translate-y-10 rounded-3xl px-3 py-1 font-bold transition'>
								<button
									className='hover:bg-orange-500 absolute inset-0 w-1/3 hover:rounded-bl-full hover:rounded-tl-full'
									onClick={handleAddItemToCart}
								>
									+
								</button>
								<div className='text-center' onClick={handleDivClick}>
									<input
										type='number'
										value={count}
										className='bg-transparent w-1/3 text-center box-border outline-none focus:outline-2 focus:scale-125 focus:outline-amber-700'
										onChange={handleInputChange}
									/>
								</div>
								<button
									className='hover:bg-orange-500 absolute top-0 right-0 bottom-0 w-1/3 hover:rounded-tr-full hover:rounded-br-full'
									onClick={handleRemoveProductFromCart}
								>
									–
								</button>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};
