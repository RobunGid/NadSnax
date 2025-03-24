import { ChangeEvent, EventHandler, MouseEventHandler } from 'react';
import {
	addItemToCart,
	changeItemCount,
	deleteItemFromCart,
	removeItemFromCart,
} from '../store/cartSlice';
import { useAppDispatch } from '../store';
import { Item } from '../types';

interface useItemQuantityChooserParams {
	item?: Item;
}

export const useItemQuantityChooser = ({ item }: useItemQuantityChooserParams) => {
	const dispatch = useAppDispatch();

	const handleAddItemToCart: MouseEventHandler = (event) => {
		event.preventDefault();
		dispatch(addItemToCart(item));
	};

	const handleRemoveProductFromCart: MouseEventHandler = (event) => {
		event.preventDefault();
		dispatch(removeItemFromCart(item));
	};

	const handleInputChange: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
		if (Number.isNaN(parseInt(event.target.value))) return;
		dispatch(changeItemCount(item, parseFloat(event.target.value)));
	};

	const handleDeleteItemFromCart: MouseEventHandler = () => {
		dispatch(deleteItemFromCart(item));
	};

	return {
		handleAddItemToCart,
		handleRemoveProductFromCart,
		handleInputChange,
		handleDeleteItemFromCart,
	};
};
