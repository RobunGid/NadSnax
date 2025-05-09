import { Review } from '../../types';
import { ProductRating } from '../Layout/ProductRating';
import { ProfileMenuAvatar } from '../ProfileMenu/ProfileMenuAvatar';

interface UIReviewElementProps {
	review: Review;
}

export const UIReviewElement = ({ review }: UIReviewElementProps) => {
	return (
		<div className='dark:bg-gray-800 p-6 flex flex-col gap-y-4 h-36 justify-center shadow-xl'>
			<div className='flex flex-row items-center gap-4'>
				<ProfileMenuAvatar
					user={review.user}
					className='w-16 h-16 rounded-full '
				/>
				<div>
					{review.user.firstName} {review.user.lastName}
				</div>
				<ProductRating rating={review.rating} className='flex text-yellow-400' />
			</div>
			<div>{review.text}</div>
		</div>
	);
};
