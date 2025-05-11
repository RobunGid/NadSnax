import { GoStarFill } from 'react-icons/go';

export const UIProductDetailsRatingInputs = () => {
	return (
		<div className='flex flex-row-reverse justify-end items-center text-gray-300 dark:text-neutral-600'>
			{[5, 4, 3, 2, 1].map((num) => (
				<UIProductDetailsRatingInput num={num} key={num} />
			))}
		</div>
	);
};
// TODO: Try to swap visually third and fifth element to make required label in the middle
const UIProductDetailsRatingInput = ({ num }: { num: number }) => {
	return (
		<>
			<input
				id={`hs-ratings-readonly-${num}`}
				type='radio'
				className='peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0'
				name='rating'
				value={num}
				required={true}
			/>
			<label
				htmlFor={`hs-ratings-readonly-${num}`}
				className='peer-checked:text-yellow-400 pointer-events-none dark:peer-checked:text-yellow-600'
			>
				<GoStarFill />
			</label>
		</>
	);
};
