import { ChangeEventHandler, forwardRef, MouseEventHandler } from 'react';
import { UIProductDetailsRatingInputs } from './UIProductDetailsRatingInputs';
import { UIProductDetailsTextArea } from './UIProductDetailsTextArea';
import { UIButton } from '../../UI/UIButton';
import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIProductDetailsReviewFormProps {
	onChange: ChangeEventHandler<HTMLFormElement>;
	onSubmit: MouseEventHandler<HTMLButtonElement>;
	translate: ReturnType<typeof useTranslate>;
}

export const UIProductDetailsReviewForm = withTranslate(
	forwardRef<HTMLFormElement, UIProductDetailsReviewFormProps>(
		({ onChange, onSubmit, translate }, ref) => {
			return (
				<form
					ref={ref}
					className='shadow-lg dark:shadow-gray-600 p-8 gap-y-4 flex flex-col items-center h-82 w-80'
					onChange={onChange}
				>
					<label>{translate('product_details.review_form.label')}</label>
					<UIProductDetailsRatingInputs />
					<UIProductDetailsTextArea />
					<UIButton className='w-28' onClick={onSubmit}>
						Send
					</UIButton>
				</form>
			);
		}
	)
);
