import { ReactNode } from 'react';
import { UIButton } from '../../UI/UIButton';

interface UICartOrderButtonProps {
	children: ReactNode;
}

export const UICartOrderButton = ({ children }: UICartOrderButtonProps) => {
	return <UIButton className='w-70 h-12'>{children}</UIButton>;
};
