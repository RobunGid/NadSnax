interface UIProfileMenuUserInfoProps {
	firstName?: string;
	lastName?: string;
	username?: string;
}

export const UIProfileMenuUserInfo = ({
	firstName,
	lastName,
	username,
}: UIProfileMenuUserInfoProps) => {
	return (
		<li className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
			<div>
				{firstName} {lastName}
			</div>
			<div className='font-medium truncate text-gray-500'>@{username}</div>
		</li>
	);
};
