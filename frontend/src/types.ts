import { JSX } from 'react';

export type ItemCategory = {
	name: string;
	iconUrl: string;
	pageLink: string;
	id: string;
	types: Omit<ItemType, 'category'>[];
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
	name: string;
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
	isSecretbox: boolean;
	itemDetails?: ItemDetails;
	label: string;
	price: number;
	convertedPrice: number;
	convertedOldPrice: number;
	oldPrice?: number | null;
	name: string;
	type?: Omit<ItemType, 'category'>;
	typeId?: string;
	category: Omit<ItemCategory, 'types'>;
	averageRating: number;
	ratingCount: number;
	images: Image[];
	reviews: Review[];
	favoriteId?: string;
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
	createdAt: string;
};

export type User = {
	id: string;
	avatarUrl: string;
	firstName: string;
	lastName: string;
	reviews?: Review[];
	role: Role;
	username: string;
};

export enum OrderStatus {
	processing = 'processing',
	packing = 'packing',
	shipping = 'shipping',
	ready = 'ready',
	success = 'success',
	canceled = 'canceled',
	returned = 'returned',

	deleted = 'deleted',
}

export type OrderItem = {
	id: string;
	itemId: string;
	item: Item;
	quantity: number;
};

export type Order = {
	id: string;
	userId: string;
	user: User;
	createdAt: string;
	items: OrderItem[];
	pickupPoint: string;
	status: OrderStatus;
};

export type StoreError = {
	message?: string;
	code?: string;
	status?: number;
	data?: {
		error: string;
		message: string;
	};
};

export type Role = 'user' | 'admin' | 'moderator';

export type CartItemType = {
	item: Item;
	count: number;
};

export type Section =
	| 'profile'
	| 'order-history'
	| 'reviews'
	| 'recently-viewed'
	| 'settings'
	| 'statistics'
	| 'help'
	| 'favorites';

export type ControlPanelSectionType =
	| 'statistics'
	| 'users'
	| 'items'
	| 'reviews'
	| 'orders'
	| 'create-item';

export const predicateSection = (value?: string): value is Section => {
	return !(
		value &&
		![
			'profile',
			'order-history',
			'reviews',
			'recently-viewed',
			'settings',
			'statistics',
			'help',
			'favorites',
		].includes(value)
	);
};

export const predicateControlPanelSection = (
	value?: string
): value is ControlPanelSectionType => {
	return !(
		value &&
		!['statistics', 'users', 'items', 'reviews', 'orders', 'create-item'].includes(
			value
		)
	);
};

export type SiteStatistics = {
	orderData: {
		totalOrders: number;
		processingOrders: number;
		packingOrders: number;
		shippingOrders: number;
		readyOrders: number;
		successOrders: number;
		canceledOrders: number;
		returnedOrders: number;
		deletedOrders: number;
	};
	itemData: {
		totalItems: number;
		bestsellerItems: number;
		secretboxItems: number;
		averagePrice: number;
	};
	reviewData: {
		totalReviews: number;
		averageRating: number;
	};

	userData: {
		totalUsers: number;
	};
};

export type LanguageCodes = 'ru' | 'en';

export const predicateLanguageCode = (lang: string): lang is LanguageCodes => {
	return ['ru', 'en'].includes(lang);
};

export type Language = {
	key: LanguageCodes;
	name: string;
};

export type Translation = string | Record<string, string>;
export type Keyset = Record<string, Translation>;

export type Option = JSX.IntrinsicElements['option'] & {
	value: string;
	text: string;
};
