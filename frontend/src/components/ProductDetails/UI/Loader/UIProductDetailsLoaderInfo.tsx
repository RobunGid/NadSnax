export const UIProductDetailsLoaderInfo = () => {
	return (
		<div className='flex flex-col md:mt-20 w-64 animate-skeleton opacity-0'>
			<div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mt-1'></div>
			<div className='h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-52 mt-1'></div>
			<div className='h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mt-1'></div>
			<div className='p-5'>
				<div className='h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mt-1'></div>
			</div>
			<div className='flex justify-center items-center flex-col gap-2'>
				<div className='bg-gray-200 dark:bg-gray-700 h-[60px] w-64 rounded-full'></div>
				<div className='bg-gray-200 dark:bg-gray-700 h-6 w-36 rounded-full'></div>
			</div>
			<div className='flex flex-col gap-y-4 divide-gray-600 divide-y-2'>
				<div>
					<div className='h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mt-6 mb-1'></div>
				</div>
				<div>
					<div className='h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mt-6 mb-1'></div>
				</div>
				<div>
					<div className='h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mt-6 mb-1'></div>
				</div>
				<div>
					<div className='h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mt-6 mb-1'></div>
				</div>
			</div>
		</div>
	);
};
