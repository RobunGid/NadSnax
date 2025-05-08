import { ReactNode } from 'react';

interface UIAccountEditProfileProps {
	children: ReactNode;
}

export const UIAccountEditProfile = ({ children }: UIAccountEditProfileProps) => {
	return <div className='flex gap-4 relative'>{children}</div>;
};
