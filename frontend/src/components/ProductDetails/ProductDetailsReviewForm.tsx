import { MouseEventHandler, useRef, useState } from 'react';
import { UIButton } from '../UI/UIButton';
import { UIProductDetailsRatingInputs } from './UI/UIProductDetailsRatingInputs';
import { UIProductDetailsReviewForm } from './UI/UIProductDetailsReviewForm';
import { UIProductDetailsTextArea } from './UI/UIProductDetailsTextArea';
import { useStateSelector } from '../../store';

interface ReviewFormState {
	text: string;
	rating: number;
}

const initialReviewFormState = {
	text: '',
	rating: 0,
};

export const ProductDetailsReviewForm = () => {
	const [formValue, setFormValue] = useState<ReviewFormState>(initialReviewFormState);

	const formRef = useRef<HTMLFormElement | null>(null);

	const user = useStateSelector((state) => state.user.user);

	const handleSendReview: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		if (!user) return;
		if (formRef.current && !formValue.rating) {
			formRef.current.reportValidity();
			return;
		}
		const review = {
			text: formValue.text,
			rating: formValue.rating,
			user_id: user.id,
		};
		console.log(review);
	};
	return (
		<UIProductDetailsReviewForm
			ref={formRef}
			onChange={(event) =>
				setFormValue((prev) => ({
					...prev,
					[event.target.name]: event.target.value,
				}))
			}
		>
			<label>Rate this item</label>
			<UIProductDetailsRatingInputs />
			<UIProductDetailsTextArea />
			<UIButton className='w-28' onClick={handleSendReview}>
				Send
			</UIButton>
		</UIProductDetailsReviewForm>
	);
};
