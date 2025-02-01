import { category, Product } from './types';
export const categories: Record<string, category> = {
	Snacks: {
		icon: 'gi/GiChipsBag',
		to: '/products/snacks',
		products: [
			{ name: 'Pop-corn', to: '/products/snacks/pop-corn' },
			{ name: 'Crackers', to: '/products/snacks/crackers' },
			{ name: 'Chips', to: '/products/snacks/chips' },
			{ name: 'Croutons', to: '/products/snacks/croutons' },
			{ name: 'Nuts', to: '/products/snacks/nuts' },
		],
	},
	Sweets: {
		icon: 'lu/LuCandy',
		to: '/products/sweets',
		products: [
			{ name: 'Candies', to: '/products/sweets/candies' },
			{ name: 'Cakes', to: '/products/sweets/cakes' },
			{ name: 'Gums', to: '/products/sweets/gums' },
			{ name: 'Cookies', to: '/products/sweets/cookies' },
			{ name: 'Jelly', to: '/products/sweets/jelly' },
			{ name: 'Bars', to: '/products/sweets/bars' },
		],
	},
	Drinks: {
		icon: 'ri/RiDrinks2Fill',
		to: '/products/drinks',
		products: [
			{ name: 'Juices', to: '/products/drinks/juices' },
			{ name: 'Milkshakes', to: '/products/drinks/milkshakes' },
			{ name: 'Sport-drinks', to: '/products/drinks/sports-drinks' },
			{ name: 'Tea', to: '/products/drinks/tea' },
			{ name: 'Coffee', to: '/products/drinks/coffee' },
		],
	},
};

export const products: Product[] = [
	{
		category: 'snacks',
		type: 'chips',
		cost: 8.75,
		image: 'https://i.ibb.co/DfQwbBGS/catrios-chips.png',
		imageAlt: 'Catrios Chips Image',
		label: 'Catrios Chips',
		rating: 4.5,
		ratingCount: 14,
		pageLink: '/products/snacks/chips/catrios-chips',
		id: '0001',
		description: 'Spanish salty chips',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 4.5,
		image: 'https://i.ibb.co/7F6Y020/chvatjners-chips.png',
		imageAlt: 'Chvatjners Chips Image',
		label: 'Chvatjners Chips',
		rating: 4.75,
		ratingCount: 9,
		pageLink: '/products/snacks/chips/chvatjners-chips',
		id: '0002',
		description: 'Swedish peppers chips',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 2.5,
		image: 'https://i.ibb.co/K1XjKRY/park-of-chips.png',
		imageAlt: 'Park Of Chips Image',
		label: 'Park Of Chips',
		rating: 4.25,
		ratingCount: 19,
		pageLink: '/products/snacks/chips/park-of-chips',
		id: '0003',
		description: 'American corn chips',
	},
];
