import { ReactNode } from 'react';

interface UIAdminStatisticsContainerProps {
	children: ReactNode;
}

export const UIAdminStatisticsContainer = ({
	children,
}: UIAdminStatisticsContainerProps) => {
	return <div className='card'>{children}</div>;
};
