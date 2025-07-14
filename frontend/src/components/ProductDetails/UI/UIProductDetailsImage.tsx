import clsx from 'clsx';
import { Image } from '../../../types';
import { ChangeEventHandler } from 'react';

interface UIProductDetailsImageProps {
	image: Image;
	type?: 'small' | 'big';
	onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const UIProductDetailsImage = ({
	image,
	type,
	onChange,
}: UIProductDetailsImageProps) => {
	return (
		<>
			{type == 'small' && (
				<>
					<input
						type='radio'
						defaultChecked={image.isMain}
						name='select'
						id={image.id}
						className='hidden peer'
						onChange={onChange}
					/>
					<label
						htmlFor={image.id}
						style={{ backgroundImage: `url(${image.url})` }}
						className={clsx(
							'shrink-0 w-18 min-h-18 block cursor-pointer bg-no-repeat bg-cover position bg-center rounded-md transition-transform shadow-sm shadow-gray-600 snap-center'
						)}
					/>
				</>
			)}
			{type == 'big' && (
				<div className='transition-opacity w-75 md:w-100 shadow-md shadow-gray-600'>
					<img src={image.url} />
				</div>
			)}
		</>
	);
};
