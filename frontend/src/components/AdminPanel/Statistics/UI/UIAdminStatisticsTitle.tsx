import { ReactNode } from 'react';

interface UIAdminStatisticsTitleProps {
	children: ReactNode;
}

export const UIAdminStatisticsTitle = ({ children }: UIAdminStatisticsTitleProps) => {
	return (
		<div className='text-2xl border-b-2 dark:border-gray-700 pb-2 w-full'>
			{children}
		</div>
	);
};
