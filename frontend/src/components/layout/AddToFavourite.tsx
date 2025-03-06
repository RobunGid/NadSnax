import { FC } from 'react';
import { Item } from '../../types';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';

interface AddToFavouriteProps {
	item?: Item;
}

export const AddToFavourite: FC<AddToFavouriteProps> = () => {
	return (
		<div className='flex gap-2 m-3 justify-center cursor-pointer transition-transform group'>
			<div className='relative w-6 h-6'>
				<BiHeart className='absolute scale-100 group-hover:scale-0 block transition-all duration-200' />
				<BiSolidHeart className='absolute text-red-600 opacity-0 scale-0 group-hover:block group-hover:opacity-100 group-hover:scale-110 transition-all duration-200' />
			</div>

			<div className='group-hover:scale-105 transition-transform'>
				Add to favourite
			</div>
		</div>
	);
};
