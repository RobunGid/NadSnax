import { FC } from 'react';
import { Item } from '../../types';
import { BiHeart } from 'react-icons/bi';

interface AddToFavouriteProps {
	item?: Item;
}

const AddToFavourite: FC<AddToFavouriteProps> = () => {
	return (
		<div>
			<BiHeart />
		</div>
	);
};

export default AddToFavourite;
