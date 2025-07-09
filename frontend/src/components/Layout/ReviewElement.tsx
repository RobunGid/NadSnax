import { Axios } from '../../api';
import { useI18n } from '../../i18n/i18n';
import { formatDate } from '../../logic/formatDate';
import { fetchItemsThunk, useActionCreators, useStateSelector } from '../../store';
import { Review } from '../../types';
import { UIAvatar } from '../UI/UIAvatar';
import { UIReviewElement } from '../UI/UIReviewElement';
import { RatingElement } from './RatingElement';
import { TfiTrash } from 'react-icons/tfi';

interface ReviewProps {
	review: Review;
	displayControls?: boolean;
}

export const ReviewElement = ({ review, displayControls }: ReviewProps) => {
	const { lang } = useI18n();
	const createdAt = formatDate(review.createdAt, lang);

	const accessToken = useStateSelector((state) => state.auth.accessToken);

	const actions = useActionCreators({
		fetchItems: fetchItemsThunk,
	});

	const handleDeleteReview = async () => {
		const response = await Axios.delete(`/review/${review.id}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		if (response.status === 200) {
			actions.fetchItems({
				simillarId: review.itemId,
			});
		}
	};
	return (
		<UIReviewElement>
			{displayControls && (
				<TfiTrash
					onClick={handleDeleteReview}
					className='absolute cursor-pointer hover:scale-105 bottom-2 right-2'
					title='Delete this review'
				/>
			)}
			<div className='flex flex-row gap-x-4'>
				<UIAvatar
					username={review.user.username}
					avatarUrl={review.user.avatarUrl}
					className='w-16 h-16 rounded-full '
				/>
				<div className='flex flex-col gap-2'>
					{review.user.firstName} {review.user.lastName}
					<RatingElement
						rating={review.rating}
						className='flex text-yellow-400'
					/>
				</div>
			</div>
			<div>{review.text}</div>
			<div className='dark:text-gray-500 text-sm'>{createdAt}</div>
		</UIReviewElement>
	);
};
