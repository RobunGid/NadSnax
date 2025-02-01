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
		cost: 5.0,
		image: 'https://i.ibb.co/vx7mN8rj/premium-blchips.png',
		imageAlt: 'Premium BL Chips Image',
		label: 'Premium BL Chips',
		rating: 4.3,
		ratingCount: 12,
		pageLink: '/products/snacks/chips/premium-bl-chips',
		id: '0004',
		description: 'Premium quality crispy chips',
	},
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
		description: 'Swedish pepper chips',
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
	{
		category: 'snacks',
		type: 'chips',
		cost: 3.5,
		image: 'https://i.ibb.co/FqYDcDpX/broghiss-chips.png',
		imageAlt: 'Broghiss Chips Image',
		label: 'Broghiss Chips',
		rating: 4.6,
		ratingCount: 11,
		pageLink: '/products/snacks/chips/broghiss-chips',
		id: '0005',
		description: 'Crispy potato snack',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 6.0,
		image: 'https://i.ibb.co/4RCNrfQD/prajds-chips.png',
		imageAlt: 'Prajds Chips Image',
		label: 'Prajds Chips',
		rating: 4.8,
		ratingCount: 16,
		pageLink: '/products/snacks/chips/prajds-chips',
		id: '0006',
		description: 'Seasoned and crunchy chips',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 5.5,
		image: 'https://i.ibb.co/39v3HdJ6/balfirge-bhips.png',
		imageAlt: 'Balfirge Bhips Image',
		label: 'Balfirge Bhips',
		rating: 4.7,
		ratingCount: 10,
		pageLink: '/products/snacks/chips/balfirge-bhips',
		id: '0007',
		description: 'Flavorful crispy chips',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 3.75,
		image: 'https://i.ibb.co/JRw9wz6Y/rralky-chppss.png',
		imageAlt: 'Rralky Chips Image',
		label: 'Rralky Chips',
		rating: 4.4,
		ratingCount: 13,
		pageLink: '/products/snacks/chips/rralky-chppss',
		id: '0008',
		description: 'Spicy crunchy chips',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 2.25,
		image: 'https://i.ibb.co/27gQNccK/bhip-chps.png',
		imageAlt: 'Bhip Chips Image',
		label: 'Bhip Chips',
		rating: 4.2,
		ratingCount: 15,
		pageLink: '/products/snacks/chips/bhip-chps',
		id: '0009',
		description: 'Classic salted chips',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 4.0,
		image: 'https://i.ibb.co/Lh288gR5/bhide-chips.png',
		imageAlt: 'Bhide Chips Image',
		label: 'Bhide Chips',
		rating: 4.1,
		ratingCount: 18,
		pageLink: '/products/snacks/chips/bhide-chips',
		id: '0010',
		description: 'Crispy potato chips',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 3.0,
		image: 'https://i.ibb.co/0jWrg5G0/rasun-chips.png',
		imageAlt: 'Rasun Chips Image',
		label: 'Rasun Chips',
		rating: 4.5,
		ratingCount: 14,
		pageLink: '/products/snacks/chips/rasun-chips',
		id: '0011',
		description: 'Savory crunchy chips',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 4.25,
		image: 'https://i.ibb.co/Zzgpxcsn/drolh-chips.png',
		imageAlt: 'Drolh Chips Image',
		label: 'Drolh Chips',
		rating: 4.6,
		ratingCount: 12,
		pageLink: '/products/snacks/chips/drolh-chips',
		id: '0012',
		description: 'Tasty potato chips',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 5.0,
		image: 'https://i.ibb.co/wrRBwqHf/rijg-chips.png',
		imageAlt: 'Rijg Chips Image',
		label: 'Rijg Chips',
		rating: 4.8,
		ratingCount: 17,
		pageLink: '/products/snacks/chips/rijg-chips',
		id: '0013',
		description: 'Delicious crispy chips',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 2.75,
		image: 'https://i.ibb.co/mV7bqgjr/chispy-chips.png',
		imageAlt: 'Chispy Chips Image',
		label: 'Chispy Chips',
		rating: 4.4,
		ratingCount: 20,
		pageLink: '/products/snacks/chips/chispy-chips',
		id: '0014',
		description: 'Crispy and tasty chips',
	},
	{
		category: 'snacks',
		type: 'chips',
		cost: 3.5,
		image: 'https://i.ibb.co/3mXSqQ1q/chp-chapys-chips.png',
		imageAlt: 'Chp Chapys Chips Image',
		label: 'Chp Chapys Chips',
		rating: 4.3,
		ratingCount: 8,
		pageLink: '/products/snacks/chips/chp-chapys-chips',
		id: '0015',
		description: 'Crunchy flavorful chips',
	},
];
