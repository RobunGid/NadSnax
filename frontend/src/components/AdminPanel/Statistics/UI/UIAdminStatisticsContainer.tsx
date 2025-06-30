import { ReactNode } from 'react';

interface UIAdminStatisticsContainerProps {
	children: ReactNode;
}

export const UIAdminStatisticsContainer = ({
	children,
}: UIAdminStatisticsContainerProps) => {
	return <div className='max-h-170 flex flex-col flex-wrap'>{children}</div>;
};
