import { UIButton } from '../UI/UIButton';
import { UIProductDetailsRatingInput } from './UI/UIProductDetailsRatingInput';

export const ProductDetailsReviewForm = () => {
	return (
		<form className='shadow-lg dark:shadow-gray-600 p-8 gap-y-4 flex flex-col items-center'>
			<div>Rate this item</div>
			<UIProductDetailsRatingInput />
			<textarea
				className='resize-none shadow-lg outline-none p-4'
				placeholder='Tell us about your opinion!'
			></textarea>
			<UIButton className='w-28'>Send</UIButton>
		</form>
	);
};
