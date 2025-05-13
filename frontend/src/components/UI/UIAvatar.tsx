import clsx from 'clsx';
import { useState } from 'react';

interface UIAvatarProps {
	className?: string;
	avatarUrl?: string;
	username: string;
}

export const UIAvatar = ({ avatarUrl, username, className }: UIAvatarProps) => {
	const [error, setError] = useState<boolean>(false);
	return !avatarUrl || error ? (
		<div className={clsx('rounded-full bg-gray-300 overflow-hidden', className)}>
			<svg
				className='text-gray-400 block'
				fill='currentColor'
				viewBox='2 2 16 16'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
					clipRule='evenodd'
				></path>
			</svg>
		</div>
	) : (
		<img
			alt={`${username} Avatar`}
			className={className}
			src={`${avatarUrl}?_=${Date.now()}`}
			onError={() => setError(true)}
		/>
	);
};
