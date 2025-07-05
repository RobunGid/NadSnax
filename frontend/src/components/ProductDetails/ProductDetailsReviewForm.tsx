import { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react';
import { UIProductDetailsReviewForm } from './UI/UIProductDetailsReviewForm';
import { fetchItemsThunk, useActionCreators, useStateSelector } from '../../store';
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

	const actions = useActionCreators({
		fetchItems: fetchItemsThunk,
	});

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

		const response = await Axios.post('/review', review, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		});

		if (response.status === 201) {
			actions.fetchItems({
				includeItemDetails: true,
				includeReviews: true,
				includeReviewsUser: true,
				includeCategory: true,
				includeType: true,
				includeImages: true,
				simillarId: itemId,
			});
		}
	};

	const handleChangeReviewForm: ChangeEventHandler<HTMLFormElement> = (event) => {
		setFormValue((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<UIProductDetailsReviewForm
			ref={formRef}
			onChange={handleChangeReviewForm}
			onSubmit={handleSendReview}
		/>
	);
};
