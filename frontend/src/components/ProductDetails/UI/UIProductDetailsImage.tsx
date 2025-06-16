import clsx from 'clsx';
import { Image } from '../../../types';

interface UIProductDetailsImageProps {
	image: Image;
	type?: 'small' | 'big';
}

export const UIProductDetailsImage = ({ image, type }: UIProductDetailsImageProps) => {
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
				className={clsx(
					type == 'small' &&
						'w-18 min-h-18 block cursor-pointer bg-no-repeat bg-cover position bg-center rounded-md transition-transform shadow-sm shadow-black snap-center',
					type == 'big' && ''
				)}
			></label>
			{type == 'big' && (
				<div className='transition-opacity h-[400px] w-[400px]'>
					<img src={image.url} />
				</div>
			)}
		</>
	);
};
