import { ReactNode } from 'react';

interface UIAccountSettingsErrorProps {
	children: ReactNode;
}

export const UIAccountSettingsError = ({ children }: UIAccountSettingsErrorProps) => {
	return <label className='text-orange-600 flex justify-center mb-2'>{children}</label>;
};
