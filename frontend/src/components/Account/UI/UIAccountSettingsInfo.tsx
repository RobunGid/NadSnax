interface UIAccountSettingsInfoProps {
	firstName: string;
	lastName: string;
	username: string;
}

export const UIAccountSettingsInfo = ({
	firstName,
	lastName,
	username,
}: UIAccountSettingsInfoProps) => {
	return (
		<div className='p-4 flex flex-col gap-2'>
			<div className='text-3xl font-bold'>
				{firstName} {lastName}
			</div>
			<div className='dark:text-gray-500'>@{username}</div>
		</div>
	);
};
