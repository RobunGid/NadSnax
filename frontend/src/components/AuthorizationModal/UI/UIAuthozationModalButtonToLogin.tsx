import { MouseEventHandler } from 'react';

interface UIAuthozationModalButtonToLoginProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const UIAuthozationModalButtonToLogin = ({
	onClick,
}: UIAuthozationModalButtonToLoginProps) => {
	return (
		<div className='flex justify-center items-center gap-x-1'>
			Already have an account?
			<button onClick={onClick} className='text-sky-500 hover:underline'>
				Login
			</button>
		</div>
	);
};
