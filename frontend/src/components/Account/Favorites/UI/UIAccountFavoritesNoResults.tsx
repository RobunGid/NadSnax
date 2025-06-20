import { UIProductsNoResults } from '../../../UI/UIProductsNoResults';

export const UIAccountFavoritesNoResults = () => {
	return (
		<UIProductsNoResults
			category='favorites'
			className='w-full mb-16 mt-16 lg:mt-0'
		/>
	);
};
