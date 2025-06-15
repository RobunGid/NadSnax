import { ReactNode } from 'react';

interface UIProfileMenuButtonProps {
	children: ReactNode;
}

export const UIProfileMenuButton = ({ children }: UIProfileMenuButtonProps) => {
	return (
		<div className='overflow-hidden rounded-full w-12 h-12 peer transition-transform hover:scale-105'>
			<input type='checkbox' id='user-profile-avatar' className='hidden'></input>

			<label
				htmlFor='user-profile-avatar'
				className='block bg-cover bg-no-repeat cursor-pointer'
			>
				{children}
			</label>
		</div>
	);
};
