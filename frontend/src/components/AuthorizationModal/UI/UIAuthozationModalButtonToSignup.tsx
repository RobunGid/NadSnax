import { MouseEventHandler } from 'react';

interface UIAuthozationModalButtonToSignupProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const UIAuthozationModalButtonToSignup = ({
	onClick,
}: UIAuthozationModalButtonToSignupProps) => {
	return (
		<div className='flex justify-center items-center gap-x-1'>
			Doesn't have an account?
			<button onClick={onClick} className='text-sky-500 hover:underline'>
				Signup
			</button>
		</div>
	);
};
