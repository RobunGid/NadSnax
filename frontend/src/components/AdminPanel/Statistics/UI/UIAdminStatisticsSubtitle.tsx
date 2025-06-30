import { ReactNode } from 'react';

interface UIAdminStatisticsSubtitleProps {
	children: ReactNode;
}

export const UIAdminStatisticsSubtitle = ({
	children,
}: UIAdminStatisticsSubtitleProps) => {
	return <div className='text-lg py-2'>{children}</div>;
};
