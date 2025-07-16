import { ReactNode } from 'react';

interface UIControlPanelPageContainerProps {
	children: ReactNode;
}

export const UIControlPanelPageContainer = ({
	children,
}: UIControlPanelPageContainerProps) => {
	return <div className='p-8 flex gap-8 flex-col lg:flex-row'>{children}</div>;
};
