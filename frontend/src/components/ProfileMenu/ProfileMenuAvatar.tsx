import clsx from 'clsx';
import { User } from '../../types';

interface ProfileMenuProps {
	user: User | null;
	className?: string;
}

export const ProfileMenuAvatar = ({ user, className }: ProfileMenuProps) => {
	return !user?.avatarUrl ? (
		<div className={clsx('rounded-full bg-gray-300', className)}>
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
			src={user.avatarUrl + '?t=' + Date.now()}
			alt={`${user.username} Avatar`}
			className={clsx('w-24 h-24 object-cover', className)}
		/>
	);
};
