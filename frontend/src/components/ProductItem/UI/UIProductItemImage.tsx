interface UIProductItemImageProps {
	isSecretbox: boolean;
	isBestseller: boolean;
	imageURL: string;
	label: string;
}

export const UIProductItemImage = ({
	isSecretbox,
	isBestseller,
	imageURL,
	label,
}: UIProductItemImageProps) => {
	return (
		<div className='relative overflow-hidden'>
			{isSecretbox && (
				<div className='absolute bg-purple-300/70 px-2 text-purple-900 font-bold w-52 text-center rotate-[-45deg] top-[47px] left-[-45px]'>
					Secret Box
				</div>
			)}
			<img
				src={imageURL}
				alt={`${label} image`}
				className='object-cover w-[240px] h-[240px] rounded-md'
			/>
			{isBestseller && (
				<div className='absolute bg-blue-200/70 px-2 text-blue-900 font-bold w-40 text-center -rotate-45 top-[25px] left-[-45px]'>
					Bestseller
				</div>
			)}
		</div>
	);
};
