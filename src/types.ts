type ProductId = string;
type ReviewId = string;

export type Product<C extends keyof AvailableCategories = keyof AvailableCategories> = {
	category: C;
	type: AvailableCategories[C];
	price: number;
	oldPrice?: number;
	image: string;
	imageAlt: string;
	label: string;
	rating: number;
	ratingCount: number;
	pageLink: string;
	id: ProductId;
	description: string;
	isBestseller?: boolean;
	count?: number;
};

export type icon = 'gi/GiChipsBag' | 'lu/LuCandy' | 'ri/RiDrinks2Fill';

export type category = {
	icon: icon;
	to: string;
	products: { name: string; to: string }[];
};

export type AvailableCategories = {
	snacks: 'chips' | 'popcorn' | 'crackers';
	sweets: 'candies' | 'gum' | 'cookies';
	drinks: 'juices' | 'milkshakes';
	'secret-boxes': 'all';
};

export type Review = {
	id: ReviewId;
	avatar: string;
	name: string;
	text: string;
	rating: number;
	productId: ProductId;
};
