import { UIButton } from '../UI/UIButton';
import { UIProductDetailsRatingInput } from './UI/UIProductDetailsRatingInput';
import { UIProductDetailsReviewForm } from './UI/UIProductDetailsReviewForm';
import { UIProductDetailsTextArea } from './UI/UIProductDetailsTextArea';

export const ProductDetailsReviewForm = () => {
	return (
		<UIProductDetailsReviewForm>
			<label>Rate this item</label>
			<UIProductDetailsRatingInput />
			<UIProductDetailsTextArea />
			<UIButton className='w-28'>Send</UIButton>
		</UIProductDetailsReviewForm>
	);
};
