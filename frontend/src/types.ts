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
	category: ItemCategory;
};

export type Item = {
	categoryId: string;
	description: string;
	id: string;
	imageUrl: string;
	isBestseller: boolean;
	itemDetails: ItemDetails;
	label: string;
	price: number;
	oldPrice?: number;
	pageLink: string;
	type: ItemType;
	category: ItemCategory;
};

export type ItemDetails = {
	fullDescription: string;
	fullLabel: string;
	ingridients: string;
	itemId: string;
	nutrition: string;
	supplier: string;
};

export type Review = {
	id: string;
	itemId: string;
	text: string;
	rating: number;
	userId: string;
	user: User;
};

export type User = {
	id: string;
};
