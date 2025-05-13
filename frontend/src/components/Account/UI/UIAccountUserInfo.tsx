import { UIAvatar } from '../../UI/UIAvatar';

interface UIAccountUserInfo {
	username: string;
	avatarUrl: string;
	firstName: string;
	lastName: string;
}

export const UIAccountUserInfo = ({
	avatarUrl,
	firstName,
	lastName,
	username,
}: UIAccountUserInfo) => {
	return (
		<li className='flex shadow-lg dark:shadow-gray-950 rounded-[40px] p-4 mb-4'>
			<UIAvatar
				username={username}
				avatarUrl={avatarUrl}
				className='rounded-full w-24 h-24 object-cover'
			/>
			<div className='p-4'>
				<div className='text-xl'>
					{firstName} {lastName}
				</div>
				<div className='text-sm text-gray-600 dark:text-gray-400'>
					@{username}
				</div>
			</div>
		</li>
	);
};
