import { GoStarFill } from 'react-icons/go';
import { UIButton } from '../UI/UIButton';

export const ProductDetailsReviewForm = () => {
	return (
		<form className='shadow-lg dark:shadow-gray-600 p-8 gap-y-4 flex flex-col items-center'>
			<div>Rate this item</div>
			<div className='flex flex-row-reverse justify-end items-center text-gray-300 dark:text-neutral-600'>
				<input
					id='hs-ratings-readonly-1'
					type='radio'
					className='peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0'
					name='hs-ratings-readonly'
					value='1'
				/>
				<label
					htmlFor='hs-ratings-readonly-1'
					className='peer-checked:text-yellow-400 pointer-events-none dark:peer-checked:text-yellow-600'
				>
					<GoStarFill />
				</label>
				<input
					id='hs-ratings-readonly-2'
					type='radio'
					className='peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0'
					name='hs-ratings-readonly'
					value='2'
				/>
				<label
					htmlFor='hs-ratings-readonly-2'
					className='peer-checked:text-yellow-400 pointer-events-none dark:peer-checked:text-yellow-600'
				>
					<GoStarFill />
				</label>
				<input
					id='hs-ratings-readonly-3'
					type='radio'
					className='peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0'
					name='hs-ratings-readonly'
					value='3'
				/>
				<label
					htmlFor='hs-ratings-readonly-3'
					className='peer-checked:text-yellow-400 pointer-events-none dark:peer-checked:text-yellow-600'
				>
					<GoStarFill />
				</label>
				<input
					id='hs-ratings-readonly-4'
					type='radio'
					className='peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0'
					name='hs-ratings-readonly'
					value='4'
				/>
				<label
					htmlFor='hs-ratings-readonly-4'
					className='peer-checked:text-yellow-400 pointer-events-none dark:peer-checked:text-yellow-600'
				>
					<GoStarFill />
				</label>
				<input
					id='hs-ratings-readonly-5'
					type='radio'
					className='peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0'
					name='hs-ratings-readonly'
					value='5'
				/>
				<label
					htmlFor='hs-ratings-readonly-5'
					className='peer-checked:text-yellow-400 pointer-events-none dark:peer-checked:text-yellow-600'
				>
					<GoStarFill />
				</label>
			</div>
			<textarea
				className='resize-none shadow-lg outline-none p-4'
				placeholder='Tell us about your opinion!'
			></textarea>
			<UIButton className='w-28'>Send</UIButton>
		</form>
	);
};
