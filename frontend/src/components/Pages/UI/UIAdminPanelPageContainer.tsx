import { ReactNode } from 'react';

interface UIAdminPanelPageContainerProps {
	children: ReactNode;
}

export const UIAdminPanelPageContainer = ({
	children,
}: UIAdminPanelPageContainerProps) => {
	return <div className='p-8 flex gap-8 flex-col lg:flex-row'>{children}</div>;
};
