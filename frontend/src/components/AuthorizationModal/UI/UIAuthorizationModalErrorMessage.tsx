import { ReactNode } from 'react';

interface UIAuthorizationModalErrorMessageProps {
	children: ReactNode;
}

export const UIAuthorizationModalErrorMessage = ({
	children,
}: UIAuthorizationModalErrorMessageProps) => {
	return <label className='text-orange-600 flex justify-center mb-2'>{children}</label>;
};
