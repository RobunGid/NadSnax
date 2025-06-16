import { ReactNode } from 'react';

interface UIAccountSettingsProps {
	children: ReactNode;
}

export const UIAccountSettings = ({ children }: UIAccountSettingsProps) => {
	return <div className='flex gap-4 relative flex-wrap flex-row'>{children}</div>;
};
