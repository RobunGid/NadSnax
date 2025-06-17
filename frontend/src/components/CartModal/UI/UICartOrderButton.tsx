import { MouseEventHandler, ReactNode } from 'react';
import { UIButton } from '../../UI/UIButton';

interface UICartOrderButtonProps {
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

export const UICartOrderButton = ({ children, onClick }: UICartOrderButtonProps) => {
	return (
		<UIButton className='w-70 h-12' onClick={onClick}>
			{children}
		</UIButton>
	);
};
