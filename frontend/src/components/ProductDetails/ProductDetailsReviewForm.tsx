import { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react';
import { UIProductDetailsReviewForm } from './UI/UIProductDetailsReviewForm';
import { addItemReviewThunk, useActionCreators } from '../../store';

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
		addFavorite: addItemReviewThunk,
	});

	const handleSendReview: MouseEventHandler<HTMLButtonElement> = async (event) => {
		event.preventDefault();
		if (formRef.current && !formValue.rating) {
			formRef.current.reportValidity();
			return;
		}
		const review = {
			text: formValue.text,
			rating: formValue.rating,
			itemId: itemId,
		};

		actions.addFavorite({ review });
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
