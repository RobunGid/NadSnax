import { formatReviewDate } from '../../logic/formatReviewDate';
import { Review } from '../../types';
import { ProfileMenuAvatar } from '../ProfileMenu/ProfileMenuAvatar';
import { UIReviewElement } from '../UI/UIReviewElement';
import { ProductRating } from './ProductRating';

interface ReviewProps {
	review: Review;
}

export const ReviewElement = ({ review }: ReviewProps) => {
	const createdAt = formatReviewDate(review.createdAt);
	return (
		<UIReviewElement>
			<div className='flex flex-row items-center gap-4'>
				<ProfileMenuAvatar
					user={review.user}
					className='w-16 h-16 rounded-full '
				/>
				{review.user.firstName} {review.user.lastName}
				<ProductRating rating={review.rating} className='flex text-yellow-400' />
			</div>
			<div>{review.text}</div>
			<div className='dark:text-gray-500 text-sm'>{createdAt}</div>
		</UIReviewElement>
	);
};
