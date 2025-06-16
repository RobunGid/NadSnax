import { MouseEventHandler, ReactNode } from 'react';
interface UIAccountSettingsDeleteButtonProps {
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const UIAccountSettingsDeleteButton = ({
	children,
	onClick,
}: UIAccountSettingsDeleteButtonProps) => {
	return (
		<button
			className='bg-red-800 hover:bg-red-900 p-3 hover:scale-105 transition h-12'
			onClick={onClick}
		>
			{children}
		</button>
	);
};
