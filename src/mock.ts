export type icon = 'gi/GiChipsBag' | 'lu/LuCandy' | 'ri/RiDrinks2Fill';

type category = {
	icon: icon;
	products: { name: string; to: string }[];
};

export const categories: Record<string, category> = {
	Snacks: {
		icon: 'gi/GiChipsBag',
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
		products: [
			{ name: 'Juices', to: '/products/drinks/juices' },
			{ name: 'Milkshakes', to: '/products/drinks/milkshakes' },
			{ name: 'Sports-drinks', to: '/products/drinks/sports-drinks' },
			{ name: 'Tea', to: '/products/drinks/tea' },
			{ name: 'Coffee', to: '/products/drinks/coffee' },
		],
	},
};
