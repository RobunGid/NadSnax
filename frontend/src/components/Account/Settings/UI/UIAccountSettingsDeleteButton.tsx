import { MouseEventHandler, PropsWithChildren } from 'react';
interface UIAccountSettingsDeleteButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const UIAccountSettingsDeleteButton = ({
	onClick,
	children,
}: PropsWithChildren<UIAccountSettingsDeleteButtonProps>) => {
	return (
		<button
			className='bg-red-800 hover:bg-red-900 p-3 hover:scale-105 transition h-12'
			onClick={onClick}
		>
			{children}
		</button>
	);
};
