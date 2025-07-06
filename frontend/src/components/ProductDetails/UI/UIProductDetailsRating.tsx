import { RatingElement } from '../../Layout/RatingElement';
import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIProductDetailsRatingProps {
	averageRating: number | null;
	ratingCount: number | null;
	translate: ReturnType<typeof useTranslate>;
}

export const UIProductDetailsRating = withTranslate(
	({ averageRating, ratingCount, translate }: UIProductDetailsRatingProps) => {
		return (
			<div className='flex justify-start items-center gap-x-1'>
				<RatingElement rating={averageRating} className='flex text-yellow-400' />
				<span className='text-gray-400'>{averageRating || 0}</span>
				<span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
				<span className='text-gray-500'>
					{ratingCount}{' '}
					{ratingCount
						? translate('review_count', {
								count: ratingCount,
						  })
						: translate('no_reviews')}
				</span>
			</div>
		);
	}
);
