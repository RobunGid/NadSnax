import { ReactNode } from 'react';

interface UIProductDetailsSimillarItemsProps {
	children: ReactNode;
}

export const UIProductDetailsSimillarItems = ({
	children,
}: UIProductDetailsSimillarItemsProps) => {
	return (
		<div className='p-5 flex flex-col md:block'>
			<span className='text-2xl font-bold dark:text-gray-300 text-center'>
				Simillar items you might like
			</span>

			<div className='flex gap-4 flex-wrap justify-center'>{children}</div>
		</div>
	);
};
