import { category, Product } from './types';
export const categories: Record<string, category> = {
	Snacks: {
		icon: 'gi/GiChipsBag',
		to: '/products/snacks',
		products: [
			{ name: 'Popcorn', to: '/products/snacks/popcorn' },
			{ name: 'Crackers', to: '/products/snacks/crackers' },
			{ name: 'Chips', to: '/products/snacks/chips' },
		],
	},
	Sweets: {
		icon: 'lu/LuCandy',
		to: '/products/sweets',
		products: [
			{ name: 'Candies', to: '/products/sweets/candies' },
			{ name: 'Gums', to: '/products/sweets/gums' },
			{ name: 'Cookies', to: '/products/sweets/cookies' },
		],
	},
	Drinks: {
		icon: 'ri/RiDrinks2Fill',
		to: '/products/drinks',
		products: [
			{ name: 'Juices', to: '/products/drinks/juices' },
			{ name: 'Milkshakes', to: '/products/drinks/milkshakes' },
		],
	},
};

export const products: Product[] = [
	{
		category: 'snacks',
		type: 'chips',
		price: 5.0,
		oldPrice: 8.0,
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
		price: 8.75,
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
		price: 4.5,
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
		price: 2.5,
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
		price: 3.5,
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
		price: 6.0,
		oldPrice: 9.0,
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
		price: 5.5,
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
		price: 3.75,
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
		price: 2.25,
		oldPrice: 4,
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
		price: 4.0,
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
		price: 3.0,
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
		price: 4.25,
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
		price: 5.0,
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
		price: 2.75,
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
		price: 3.5,
		image: 'https://i.ibb.co/3mXSqQ1q/chp-chapys-chips.png',
		imageAlt: 'Chp Chapys Chips Image',
		label: 'Chp Chapys Chips',
		rating: 4.3,
		ratingCount: 8,
		pageLink: '/products/snacks/chips/chp-chapys-chips',
		id: '0015',
		description: 'Crunchy flavorful chips',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.5,
		oldPrice: 4.0,
		image: 'https://i.ibb.co/N2L0kTcw/poppi-con-popcorn.png',
		imageAlt: 'Poppi Con Popcorn Image',
		label: 'Poppi Con Popcorn',
		rating: 4.5,
		ratingCount: 12,
		pageLink: '/products/snacks/popcorn/poppi-con-popcorn',
		id: '0016',
		description: 'Delicious caramel popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.0,
		image: 'https://i.ibb.co/5zBQmNb/propin-popcorn.png',
		imageAlt: 'Propin Popcorn Image',
		label: 'Propin Popcorn',
		rating: 4.7,
		ratingCount: 25,
		pageLink: '/products/snacks/popcorn/propin-popcorn',
		id: '0017',
		description: 'Sweet and salty popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.25,
		image: 'https://i.ibb.co/ZpxqKL8w/popcovr-popcorn.png',
		imageAlt: 'Popcovr Popcorn Image',
		label: 'Popcovr Popcorn',
		rating: 4.3,
		ratingCount: 30,
		pageLink: '/products/snacks/popcorn/popcovr-popcorn',
		id: '0018',
		description: 'Flavor-packed buttery popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 2.95,
		image: 'https://i.ibb.co/WNK87ys6/proc-7oin-popcorn.png',
		imageAlt: 'Proc 7oin Popcorn Image',
		label: 'Proc 7oin Popcorn',
		rating: 4.1,
		ratingCount: 18,
		pageLink: '/products/snacks/popcorn/proc-7oin-popcorn',
		id: '0019',
		description: 'Crispy and light popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.75,
		image: 'https://i.ibb.co/Fb58BzDg/popp-cocon-popcorn.png',
		imageAlt: 'Popp Cocon Popcorn Image',
		label: 'Popp Cocon Popcorn',
		rating: 4.6,
		ratingCount: 40,
		pageLink: '/products/snacks/popcorn/popp-cocon-popcorn',
		id: '0020',
		description: 'Coconut flavored popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.2,
		oldPrice: 3.8,
		image: 'https://i.ibb.co/7NVSmJ1H/pecow-popcorn.png',
		imageAlt: 'Pecow Popcorn Image',
		label: 'Pecow Popcorn',
		rating: 4.4,
		ratingCount: 15,
		pageLink: '/products/snacks/popcorn/pecow-popcorn',
		id: '0021',
		description: 'Cheese burst popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.0,
		image: 'https://i.ibb.co/S7tf2KMc/piopn-pocop-popcorn.png',
		imageAlt: 'Piopn Pocop Popcorn Image',
		label: 'Piopn Pocop Popcorn',
		rating: 4.2,
		ratingCount: 22,
		pageLink: '/products/snacks/popcorn/piopn-pocop-popcorn',
		id: '0022',
		description: 'Spicy zesty popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 2.85,
		image: 'https://i.ibb.co/Gqcs54k/bcon-popcorn.png',
		imageAlt: 'Bcon Popcorn Image',
		label: 'Bcon Popcorn',
		rating: 4.0,
		ratingCount: 10,
		pageLink: '/products/snacks/popcorn/bcon-popcorn',
		id: '0023',
		description: 'Bacon-flavored popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.5,
		image: 'https://i.ibb.co/XncGfpH/pocin-popcorn.png',
		imageAlt: 'Pocin Popcorn Image',
		label: 'Pocin Popcorn',
		rating: 4.7,
		ratingCount: 35,
		pageLink: '/products/snacks/popcorn/pocin-popcorn',
		id: '0024',
		description: 'Rich buttery popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.0,
		image: 'https://i.ibb.co/x8KL7WMV/prononn-sppp-bopen-popcorn.png',
		imageAlt: 'Prononn Sppp Bopen Popcorn Image',
		label: 'Prononn Popcorn',
		rating: 4.3,
		ratingCount: 16,
		pageLink: '/products/snacks/popcorn/prononn-sppp-bopen-popcorn',
		id: '0025',
		description: 'Crispy caramel popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.2,
		image: 'https://i.ibb.co/WpfHDcQS/pop-con-popcorn.png',
		imageAlt: 'Pop Con Popcorn Image',
		label: 'Pop Con Popcorn',
		rating: 4.4,
		ratingCount: 50,
		pageLink: '/products/snacks/popcorn/pop-con-popcorn',
		id: '0026',
		description: 'Sweet and crunchy popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.4,
		oldPrice: 3.8,
		image: 'https://i.ibb.co/ptXJ9Qt/popp-rocin-popcorn.png',
		imageAlt: 'Popp Rocin Popcorn Image',
		label: 'Popp Rocin Popcorn',
		rating: 4.5,
		ratingCount: 27,
		pageLink: '/products/snacks/popcorn/popp-rocin-popcorn',
		id: '0027',
		description: 'Rich chocolate popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 2.95,
		image: 'https://i.ibb.co/b5Nf4k5k/popd-ocn-popcorn.png',
		imageAlt: 'Popd Ocn Popcorn Image',
		label: 'Popd Ocn Popcorn',
		rating: 4.0,
		ratingCount: 13,
		pageLink: '/products/snacks/popcorn/popd-ocn-popcorn',
		id: '0028',
		description: 'Light buttery popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.5,
		oldPrice: 4.0,
		image: 'https://i.ibb.co/27tBjTM8/pocpp-coon.png',
		imageAlt: 'Pocpp Coon Popcorn Image',
		label: 'Pocpp Coon Popcorn',
		rating: 4.5,
		ratingCount: 12,
		pageLink: '/products/snacks/popcorn/pocpp-coon-popcorn',
		id: '0029',
		description: 'Delicious caramel popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.0,
		image: 'https://i.ibb.co/sdfnRSF1/prpoint-popcorn.png',
		imageAlt: 'Prpoint Popcorn Image',
		label: 'Prpoint Popcorn',
		rating: 4.7,
		ratingCount: 25,
		pageLink: '/products/snacks/popcorn/prpoint-popcorn',
		id: '0030',
		description: 'Sweet and salty popcorn',
	},
	{
		category: 'snacks',
		type: 'popcorn',
		price: 3.25,
		image: 'https://i.ibb.co/gLgPn2pT/pocp-popcorn.png',
		imageAlt: 'Pocp Popcorn Image',
		label: 'Pocp Popcorn',
		rating: 4.3,
		ratingCount: 30,
		pageLink: '/products/snacks/popcorn/pocp-popcorn',
		id: '0031',
		description: 'Flavor-packed buttery popcorn',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 3.99,
		oldPrice: 4.49,
		image: 'https://i.ibb.co/wfy44CD/cookeps-cookies.png',
		imageAlt: 'Cookeps Cookies Image',
		label: 'Cookeps Cookies',
		rating: 4.5,
		ratingCount: 15,
		pageLink: '/products/sweets/cookies/cookeps-cookies',
		id: '0032',
		description: 'Delicious buttery cookies',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 2.99,
		image: 'https://i.ibb.co/Z69YsCST/chhes-cookie.png',
		imageAlt: 'Chhes Cookie Image',
		label: 'Chhes Cookie',
		rating: 4.2,
		ratingCount: 12,
		pageLink: '/products/sweets/cookies/chhes-cookie',
		id: '0033',
		description: 'Crunchy and tasty treat',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 4.25,
		image: 'https://i.ibb.co/wF0x25w7/chopies-cookies.png',
		imageAlt: 'Chopies Cookies Image',
		label: 'Chopies Cookies',
		rating: 4.7,
		ratingCount: 30,
		pageLink: '/products/sweets/cookies/chopies-cookies',
		id: '0034',
		description: 'Soft and chewy cookies',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 3.5,
		image: 'https://i.ibb.co/FLMsRzhB/chokes-cookies.png',
		imageAlt: 'Chokes Cookies Image',
		label: 'Chokes Cookies',
		rating: 4.3,
		ratingCount: 10,
		pageLink: '/products/sweets/cookies/chokes-cookies',
		id: '0035',
		description: 'Sweet and delicious flavor',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 3.0,
		image: 'https://i.ibb.co/67X70mWx/chopey-cookies.png',
		imageAlt: 'Chopey Cookies Image',
		label: 'Chopey Cookies',
		rating: 4.1,
		ratingCount: 25,
		pageLink: '/products/sweets/cookies/chopey-cookies',
		id: '0036',
		description: 'Crispy with a light texture',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 3.75,
		oldPrice: 4.0,
		image: 'https://i.ibb.co/B2N3BBfQ/chinp-cookies.png',
		imageAlt: 'Chinp Cookies Image',
		label: 'Chinp Cookies',
		rating: 4.6,
		ratingCount: 22,
		pageLink: '/products/sweets/cookies/chinp-cookies',
		id: '0037',
		description: 'Delightful crispy cookie bites',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 2.5,
		image: 'https://i.ibb.co/KpDX9JW8/chipy-cookies.png',
		imageAlt: 'Chipy Cookies Image',
		label: 'Chipy Cookies',
		rating: 4.0,
		ratingCount: 18,
		pageLink: '/products/sweets/cookies/chipy-cookies',
		id: '0038',
		description: 'Perfectly balanced flavor',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 4.0,
		image: 'https://i.ibb.co/60W1MWw1/chip-chop-choips-cookies.png',
		imageAlt: 'Chip Chop Choips Cookies Image',
		label: 'Chip Chop Choips Cookies',
		rating: 4.4,
		ratingCount: 35,
		pageLink: '/products/sweets/cookies/chip-chop-choips-cookies',
		id: '0039',
		description: 'Light and crispy chips cookies',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 3.25,
		image: 'https://i.ibb.co/TBGCyxk6/roc-choy-cookies.png',
		imageAlt: 'Roc Choy Cookies Image',
		label: 'Roc Choy Cookies',
		rating: 4.2,
		ratingCount: 14,
		pageLink: '/products/sweets/cookies/roc-choy-cookies',
		id: '0040',
		description: 'Crispy and delicious crunch',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 3.5,
		image: 'https://i.ibb.co/bMLDRBB4/chooke-cookies.png',
		imageAlt: 'Chooke Cookies Image',
		label: 'Chooke Cookies',
		rating: 4.6,
		ratingCount: 28,
		pageLink: '/products/sweets/cookies/chooke-cookies',
		id: '0041',
		description: 'Crunchy cookie with unique flavor',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 4.1,
		image: 'https://i.ibb.co/PsXqTq9P/filoo-cookies.png',
		imageAlt: 'Filoo Cookies Image',
		label: 'Filoo Cookies',
		rating: 4.7,
		ratingCount: 40,
		pageLink: '/products/sweets/cookies/filoo-cookies',
		id: '0042',
		description: 'Soft and chocolatey goodness',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 3.25,
		oldPrice: 3.75,
		image: 'https://i.ibb.co/ffd5ffw/chopps-cookeis.png',
		imageAlt: 'Chopps Cookies Image',
		label: 'Chopps Cookies',
		rating: 4.3,
		ratingCount: 50,
		pageLink: '/products/sweets/cookies/chopps-cookeis',
		id: '0043',
		description: 'Crispy, sweet, and addictive',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 2.75,
		oldPrice: 4.0,
		image: 'https://i.ibb.co/d0LD1T0K/chiolas-cookies.png',
		imageAlt: 'Chiolas Cookies Image',
		label: 'Chiolas Cookies',
		rating: 4.4,
		ratingCount: 45,
		pageLink: '/products/sweets/cookies/chiolas-cookies',
		id: '0044',
		description: 'Buttery and soft texture',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 3.0,
		image: 'https://i.ibb.co/fdbWkcNj/rhopys-cookies.png',
		imageAlt: 'Rhopys Cookies Image',
		label: 'Rhopys Cookies',
		rating: 4.1,
		ratingCount: 16,
		pageLink: '/products/sweets/cookies/rhopys-cookies',
		id: '0045',
		description: 'Perfect balance of sweetness',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 4.25,
		image: 'https://i.ibb.co/Y4TgnfFn/blues-chokes-cookies.png',
		imageAlt: 'Blues Chokes Cookies Image',
		label: 'Blues Chokes Cookies',
		rating: 4.5,
		ratingCount: 30,
		pageLink: '/products/sweets/cookies/blues-chokes-cookies',
		id: '0046',
		description: 'Rich and crispy delight',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 2.8,
		image: 'https://i.ibb.co/bjXpSGcL/chooters-cookies.png',
		imageAlt: 'Chooters Cookies Image',
		label: 'Chooters Cookies',
		rating: 4.3,
		ratingCount: 24,
		pageLink: '/products/sweets/cookies/chooters-cookies',
		id: '0047',
		description: 'Light and crispy cookies',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 3.6,
		image: 'https://i.ibb.co/qLqy2F8n/chmoers-cookies.png',
		imageAlt: 'Chmoers Cookies Image',
		label: 'Chmoers Cookies',
		rating: 4.4,
		ratingCount: 33,
		pageLink: '/products/sweets/cookies/chmoers-cookies',
		id: '0048',
		description: 'Crunchy and creamy goodness',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 3.0,
		image: 'https://i.ibb.co/sMGBbWm/ceo-bill-cookies.png',
		imageAlt: 'Ceo Bill Cookies Image',
		label: 'Ceo Bill Cookies',
		rating: 4.0,
		ratingCount: 22,
		pageLink: '/products/sweets/cookies/ceo-bill-cookies',
		id: '0049',
		description: 'Smooth and sweet cookie bite',
	},
	{
		category: 'sweets',
		type: 'cookies',
		price: 4.0,
		image: 'https://i.ibb.co/v6DRsXRc/chokie-cookies.png',
		imageAlt: 'Chokie Cookies Image',
		label: 'Chokie Cookies',
		rating: 4.6,
		ratingCount: 40,
		pageLink: '/products/sweets/cookies/chokie-cookies',
		id: '0050',
		description: 'Crunchy and rich in flavor',
	},
	{
		category: 'snacks',
		type: 'crackers',
		price: 2.8,
		image: 'https://i.ibb.co/21XjD2nV/camiom-crackers.png',
		imageAlt: 'Camiom Crackers Image',
		label: 'Camiom Crackers',
		rating: 4.3,
		ratingCount: 18,
		pageLink: '/products/snacks/crackers/camiom-crackers',
		id: '0051',
		description: 'Crispy and flavorful snack',
	},
	{
		category: 'snacks',
		type: 'crackers',
		price: 3.0,
		image: 'https://i.ibb.co/p6KZjWC7/caaker-crackers.png',
		imageAlt: 'Caaker Crackers Image',
		label: 'Caaker Crackers',
		rating: 4.2,
		ratingCount: 15,
		pageLink: '/products/snacks/crackers/caaker-crackers',
		id: '0052',
		description: 'Deliciously crunchy crackers',
	},
	{
		category: 'snacks',
		type: 'crackers',
		price: 2.5,
		oldPrice: 3.75,
		image: 'https://i.ibb.co/HD5yBFNV/crahior-crackers.png',
		imageAlt: 'Crahiior Crackers Image',
		label: 'Crahiior Crackers',
		rating: 4.1,
		ratingCount: 22,
		pageLink: '/products/snacks/crackers/crahior-crackers',
		id: '0053',
		description: 'Tasty crackers with a bite',
	},
	{
		category: 'snacks',
		type: 'crackers',
		price: 3.5,
		image: 'https://i.ibb.co/jZPdM5C5/caanon-crackers.png',
		imageAlt: 'Caanon Crackers Image',
		label: 'Caanon Crackers',
		rating: 4.4,
		ratingCount: 20,
		pageLink: '/products/snacks/crackers/caanon-crackers',
		id: '0054',
		description: 'Light and crunchy cracker snacks',
	},
	{
		category: 'snacks',
		type: 'crackers',
		price: 2.9,
		image: 'https://i.ibb.co/m5RBgLVK/suan-car-cous-crackers.png',
		imageAlt: 'Suan Car Cous Crackers Image',
		label: 'Suan Car Cous Crackers',
		rating: 4.0,
		ratingCount: 17,
		pageLink: '/products/snacks/crackers/suan-car-cous-crackers',
		id: '0055',
		description: 'Crisp and delightful flavor',
	},
	{
		category: 'snacks',
		type: 'crackers',
		price: 3.1,
		image: 'https://i.ibb.co/5x6MpyPP/bugen-crackers.png',
		imageAlt: 'Bugen Crackers Image',
		label: 'Bugen Crackers',
		rating: 4.5,
		ratingCount: 30,
		pageLink: '/products/snacks/crackers/bugen-crackers',
		id: '0056',
		description: 'Savory crackers for all tastes',
	},
	{
		category: 'snacks',
		type: 'crackers',
		price: 3.25,
		image: 'https://i.ibb.co/rR9Djng1/canckon-crackers.png',
		imageAlt: 'Canckon Crackers Image',
		label: 'Canckon Crackers',
		rating: 4.3,
		ratingCount: 25,
		pageLink: '/products/snacks/crackers/canckon-crackers',
		id: '0057',
		description: 'Perfectly crispy and savory',
	},
];
