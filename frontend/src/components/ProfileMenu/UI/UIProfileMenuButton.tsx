import { PropsWithChildren, RefObject } from 'react';

interface UIProfileMenuButtonProps {
	inputRef?: RefObject<HTMLInputElement | null>;
}

export const UIProfileMenuButton = ({
	children,
	inputRef,
}: PropsWithChildren<UIProfileMenuButtonProps>) => {
	return (
		<div className='overflow-hidden rounded-full w-12 h-12 peer transition-transform hover:scale-105'>
			<input
				type='checkbox'
				id='user-profile-avatar'
				className='hidden'
				ref={inputRef}
			/>

			<label
				htmlFor='user-profile-avatar'
				className='block bg-cover bg-no-repeat cursor-pointer'
			>
				{children}
			</label>
		</div>
	);
};
