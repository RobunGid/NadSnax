import clsx from 'clsx';

interface UIAccountEditProfileAvatarErrorMessagePrps {
	avatarErrorMessage?: string;
}

export const UIAccountEditProfileAvatarErrorMessage = ({
	avatarErrorMessage,
}: UIAccountEditProfileAvatarErrorMessagePrps) => {
	return (
		<div
			className={clsx(
				'bg-orange-600 shadow-2xl p-2 absolute rounded-xl -top-12 -left-4 opacity-0',
				avatarErrorMessage && 'animate-fadeOut'
			)}
		>
			{avatarErrorMessage}
			<div className='absolute border-orange-600 top-10 left-5 border-x-transparent border-t-[16px] border-x-[16px]'></div>
		</div>
	);
};
