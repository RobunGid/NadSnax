import { ReactNode } from 'react';

interface UIProductDetailsReviewFormProps {
	children: ReactNode;
}

export const UIProductDetailsReviewForm = ({
	children,
}: UIProductDetailsReviewFormProps) => {
	return (
		<form className='shadow-lg dark:shadow-gray-600 p-8 gap-y-4 flex flex-col items-center'>
			{children}
		</form>
	);
};
