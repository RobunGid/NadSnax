interface UIProductItemBadgesProps {
	isSecretbox?: boolean;
	isBestseller?: boolean;
}

export const UIProductItemBadges = ({
	isSecretbox,
	isBestseller,
}: UIProductItemBadgesProps) => {
	return (
		<>
			{isSecretbox && (
				<div className='absolute bg-purple-300/70 px-2 text-purple-900 font-bold w-52 text-center rotate-[-45deg] top-[47px] left-[-45px]'>
					Secret Box
				</div>
			)}
			{isBestseller && (
				<div className='absolute bg-blue-200/70 px-2 text-blue-900 font-bold w-40 text-center -rotate-45 top-[25px] left-[-45px]'>
					Bestseller
				</div>
			)}
		</>
	);
};
