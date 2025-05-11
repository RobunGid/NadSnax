import { MouseEventHandler, useRef, useState } from 'react';
import { UIButton } from '../UI/UIButton';
import { UIProductDetailsRatingInputs } from './UI/UIProductDetailsRatingInputs';
import { UIProductDetailsReviewForm } from './UI/UIProductDetailsReviewForm';
import { UIProductDetailsTextArea } from './UI/UIProductDetailsTextArea';
import { useStateSelector } from '../../store';
import { Axios } from '../../api';

interface ReviewFormState {
	text: string;
	rating: number;
}

const initialReviewFormState = {
	text: '',
	rating: 0,
};
interface ProductDetailsReviewFormProps {
	itemId: string;
}

export const ProductDetailsReviewForm = ({ itemId }: ProductDetailsReviewFormProps) => {
	const [formValue, setFormValue] = useState<ReviewFormState>(initialReviewFormState);

	const formRef = useRef<HTMLFormElement | null>(null);

	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const handleSendReview: MouseEventHandler<HTMLButtonElement> = async (event) => {
		event.preventDefault();
		if (formRef.current && !formValue.rating) {
			formRef.current.reportValidity();
			return;
		}
		const review = {
			text: formValue.text,
			rating: formValue.rating,
			item_id: itemId,
		};
		Axios.post('/review', review, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		});
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
