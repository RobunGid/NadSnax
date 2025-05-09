import { Review } from '../../types';
import { ProfileMenuAvatar } from '../ProfileMenu/ProfileMenuAvatar';

interface UIReviewProps {
	review: Review;
}

export const UIReview = ({ review }: UIReviewProps) => {
	return (
		<div className='border-red-800 border-4'>
			<div>{review.user.firstName}</div>
			<div>{review.user.lastName}</div>
			<div>{review.text}</div>
			<ProfileMenuAvatar user={review.user} />
		</div>
	);
};
