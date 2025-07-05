import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIProductDetailsTextAreaProps {
	translate: ReturnType<typeof useTranslate>;
}

export const UIProductDetailsTextArea = withTranslate(
	({ translate }: UIProductDetailsTextAreaProps) => {
		return (
			<textarea
				className='resize-none shadow-lg outline-none p-4'
				placeholder={translate(
					'product_details.review_form.text_area_placeholder'
				)}
				name='text'
				maxLength={160}
			/>
		);
	}
);
