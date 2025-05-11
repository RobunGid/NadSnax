import { ChangeEventHandler, forwardRef, ReactNode } from 'react';

interface UIProductDetailsReviewFormProps {
	children: ReactNode;
	onChange: ChangeEventHandler<HTMLFormElement>;
}

export const UIProductDetailsReviewForm = forwardRef<
	HTMLFormElement,
	UIProductDetailsReviewFormProps
>(({ children, onChange }, ref) => {
	return (
		<form
			ref={ref}
			className='shadow-lg dark:shadow-gray-600 p-8 gap-y-4 flex flex-col items-center'
			onChange={onChange}
		>
			{children}
		</form>
	);
});
