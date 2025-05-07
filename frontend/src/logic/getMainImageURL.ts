import { Item } from '../types';

export const getMainImageURL = (item: Item) => {
	const mainImage = item.images.find((image) => image.isMain);
	const imageURL = mainImage ? mainImage.url : item.images[0]?.url;
	return imageURL;
};
