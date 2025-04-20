import { Image } from '../../../types';

interface UIProductDetailsImageProps {
	image: Image;
}

export const UIProductDetailsImage = ({ image }: UIProductDetailsImageProps) => {
	return (
		<>
			<input
				type='radio'
				defaultChecked={image.isMain}
				name='select'
				id={image.id}
				className='hidden peer'
			/>
			<label
				htmlFor={image.id}
				style={{ backgroundImage: `url(${image.url})` }}
				className='block cursor-pointer bg-no-repeat bg-cover position bg-center rounded-md transition-transform shadow-sm shadow-black'
			></label>
			<div className='opacity-0 transition-opacity md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-5 col-start-1 col-end-5 row-start-1 row-end-1'>
				<img src={image.url} />
			</div>
		</>
	);
};
