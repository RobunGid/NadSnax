export const UICartHeader = () => {
	return (
		<>
			<div className='text-gray-500 text-xs text-center hidden md:block'>
				Product
			</div>
			<div className='text-gray-500 text-xs hidden md:block ms-13'>Quantity</div>
			<div className='text-gray-500 text-xs text-left hidden md:block'>
				Total price
			</div>
		</>
	);
};
