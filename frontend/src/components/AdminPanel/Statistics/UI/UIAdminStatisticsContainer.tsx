import { ReactNode } from 'react';

interface UIAdminStatisticsContainerProps {
	children: ReactNode;
}

export const UIAdminStatisticsContainer = ({
	children,
}: UIAdminStatisticsContainerProps) => {
	return <div className='max-h-[650px] flex flex-col flex-wrap'>{children}</div>;
};
