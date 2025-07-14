export const UIproductDetailsLoader = () => {
	return (
		<div className='flex flex-col gap-10 flex-wrap justify-start dark:text-gray-200 px-2 lg:flex-row items-center w-full lg:w-auto cursor-wait'>
			<div className='w-full flex flex-row justify-center gap-4 flex-wrap'>
				<div className='flex flex-col md:flex-row justify-center items-center'>
					<div className='flex md:flex-col flex-row items-center justify-center p-4 mt-8'>
						<div
							className={
								'md:h-[440px] md:w-[150px] w-[440px] p-4 overflow-x-scroll md:overflow-y-scroll md:snap-y snap-x flex flex-row md:flex-col items-center gap-4 py-2 no-scrollbar'
							}
						>
							<div
								className={
									'animate-skeleton shrink-0 w-18 min-h-18 block rounded-md transition-transform shadow-sm shadow-gray-600 snap-center dark:bg-gray-600 bg-gray-300'
								}
							/>
							<div
								className={
									'animate-skeleton shrink-0 w-18 min-h-18 block rounded-md transition-transform shadow-sm shadow-gray-600 snap-center dark:bg-gray-600 bg-gray-300'
								}
							/>
							<div
								className={
									'animate-skeleton shrink-0 w-18 min-h-18 block rounded-md transition-transform shadow-sm shadow-gray-600 snap-center dark:bg-gray-600 bg-gray-300'
								}
							/>
							<div
								className={
									'animate-skeleton shrink-0 w-18 min-h-18 block rounded-md transition-transform shadow-sm shadow-gray-600 snap-center dark:bg-gray-600 bg-gray-300'
								}
							/>
						</div>
					</div>
					<div className='transition-opacity h-[400px] w-[400px] shadow-md shadow-gray-600 dark:bg-gray-600 bg-gray-300 animate-skeleton rounded-xl' />
					{/* main image*/}
				</div>
				<div className='flex flex-col md:mt-20 w-100 px-4 h-[550px] overflow-y-auto scrollbar-stable gap-2'>
					<div className='w-40 h-4 dark:bg-gray-600 bg-gray-300 animate-skeleton rounded-sm' />
					<div className='w-40 h-4 dark:bg-gray-600 bg-gray-300 animate-skeleton rounded-sm' />
					<div className='w-40 h-4 dark:bg-gray-600 bg-gray-300 animate-skeleton rounded-sm' />
					<div className='flex gap-2 m-4 items-center'>
						<div className='w-30 h-6 dark:bg-gray-600 bg-gray-300 animate-skeleton rounded-md' />
						{/* Price */}
					</div>
					<div className='dark:bg-gray-600 bg-gray-300 animate-skeleton flex h-[60px] rounded-full px-3 py-1' />
					{/* Add to cart button */}
					<div className='flex gap-2 m-1 justify-center cursor-pointer transition-transform group'>
						<div className='w-40 h-6 dark:bg-gray-600 bg-gray-300 animate-skeleton rounded-sm' />
					</div>
					{/* Add to favorite*/}
					<div className='flex flex-col gap-y-2'>
						<div className='w-full h-10 dark:bg-gray-600 bg-gray-300 animate-skeleton rounded-md' />
						<div className='w-full h-10 dark:bg-gray-600 bg-gray-300 animate-skeleton rounded-md' />
						<div className='w-full h-10 dark:bg-gray-600 bg-gray-300 animate-skeleton rounded-md' />
						<div className='w-full h-10 dark:bg-gray-600 bg-gray-300 animate-skeleton rounded-md' />
					</div>
				</div>
			</div>
			<div className='w-full flex flex-row justify-start gap-10'>
				<div className='flex flex-col overflow-y-auto gap-y-4 w-200 items-center'>
					<div className='dark:bg-gray-600 bg-gray-300 p-6 flex flex-col gap-y-4 h-40 justify-center shadow-xl relative w-64 animate-skeleton rounded-lg' />
					<div className='dark:bg-gray-600 bg-gray-300 p-6 flex flex-col gap-y-4 h-40 justify-center shadow-xl relative w-64 animate-skeleton rounded-lg' />
					<div className='dark:bg-gray-600 bg-gray-300 p-6 flex flex-col gap-y-4 h-40 justify-center shadow-xl relative w-64 animate-skeleton rounded-lg' />
				</div>
			</div>
		</div>
	);
};
