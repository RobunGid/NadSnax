import { Review, User } from './types';

export const users: User[] = [
	{
		avatarUrl: 'https://i.ibb.co/tMdp4zG2/Rita-James.png',
		id: '123',
		name: 'RitaJames',
	},
];

export const reviews: Review[] = [
	{
		rating: 5,
		text: 'These chips are tasty! The flavor is just right, not too salty, and nice and crisp. Perfect snack!',
		itemId: '0',
		id: '0',
		userId: '0',
		user: users[0],
		// item: items[0]
	},
];
