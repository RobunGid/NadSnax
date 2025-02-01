type productId = string;

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
	id: productId;
	description: string;
};

export type icon = 'gi/GiChipsBag' | 'lu/LuCandy' | 'ri/RiDrinks2Fill';

export type category = {
	icon: icon;
	to: string;
	products: { name: string; to: string }[];
};

export type AvailableCategories = {
	snacks: 'chips' | 'popcorn' | 'crackers' | 'croutons' | 'nuts';
	sweets: 'candies' | 'gums' | 'cookies' | 'jelly' | 'bars';
	wrinks: 'juices' | 'milkshakes' | 'sport-drinks' | 'tea' | 'coffee';
};
