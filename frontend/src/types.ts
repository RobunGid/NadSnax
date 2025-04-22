export type ItemCategory = {
	name: string;
	iconUrl: string;
	pageLink: string;
	id: string;
	types: ItemType[];
};

export type ItemType = {
	name: string;
	iconUrl: string;
	pageLink: string;
	id: string;
	categoryId: string;
	category: Omit<ItemCategory, 'types'>;
};

export type Image = {
	id: string;
	alt: string;
	fileName: string;
	isMain?: boolean;
	title: string;
	url: string;
	itemId: string;
};

export type Item = {
	categoryId: string;
	description: string;
	id: string;
	isBestseller: boolean;
	isSecretbox?: boolean;
	itemDetails: ItemDetails;
	label: string;
	price: number;
	oldPrice?: number | null;
	pageLink: string;
	type: Omit<ItemType, 'category'>;
	typeId: string;
	category: Omit<ItemCategory, 'types'>;
	averageRating: number | null;
	ratingCount: number | null;
	images: Image[];
};

export type ItemDetails = {
	fullDescription: string;
	fullLabel: string;
	ingridients: string;
	itemId: string;
	nutrition: string;
	supplier: string;
	supplierLink: string;
};

export type Review = {
	id: string;
	itemId: string;
	item: Item;

	text: string;
	rating: number;

	userId: string;
	user: User;
};

export type User = {
	id: string;
	avatarUrl: string;
	name: string;
	email: string;
};

export type CartItemType = {
	item: Item;
	count: number;
};

export type Section =
	| 'profile'
	| 'order_history'
	| 'reviews'
	| 'recently_viewed'
	| 'settings'
	| 'statistics'
	| 'help'
	| 'signout'
	| 'favourites';

export const predicateSection = (value?: string): value is Section => {
	if (
		value &&
		![
			'profile',
			'order_history',
			'reviews',
			'recently_viewed',
			'settings',
			'statistics',
			'help',
			'signout',
		].includes(value)
	) {
		return false;
	} else {
		return true;
	}
};
