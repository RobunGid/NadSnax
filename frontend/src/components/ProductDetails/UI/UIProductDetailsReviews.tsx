import { ReactNode } from 'react';

interface UIProductDetailsReviewsProps {
	children: ReactNode;
}

export const UIProductDetailsReviews = ({ children }: UIProductDetailsReviewsProps) => {
	return <div className='flex flex-col overflow-y-auto gap-y-4'>{children}</div>;
};
