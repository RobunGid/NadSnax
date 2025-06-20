import { ReactNode } from 'react';

interface UICartProps {
	children: ReactNode;
}

export const UICart = ({ children }: UICartProps) => {
	return <div className='w-[20rem] md:w-[40rem] min-h-120 mt-2'>{children}</div>;
};
