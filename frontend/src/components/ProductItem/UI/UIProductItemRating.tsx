import { FaCommentAlt } from 'react-icons/fa';
import { GoStarFill } from 'react-icons/go';
import { useTranslate } from '../../../i18n/i18n';
import { withTranslate } from '../../../logic/withTranslate';

interface UIProductItemRatingProps {
	reviewCount: number | null;
	averageRating: string | null;
	translate: ReturnType<typeof useTranslate>;
}

export const UIProductItemRating = withTranslate(
	({ reviewCount, averageRating, translate }: UIProductItemRatingProps) => {
		return (
			<div className='flex justify-start items-center gap-x-3'>
				<div className='flex items-center gap-x-1'>
					<GoStarFill size='16' className='text-yellow-600' />
					<span className='text-gray-400 text-[0.75rem]'>
						{averageRating || 0}
					</span>
				</div>
				<div className='flex items-center gap-x-1.5'>
					<FaCommentAlt size='12' className='text-gray-500' />
					<span className='text-gray-500 text-[0.75rem]'>
						{reviewCount}{' '}
						{reviewCount
							? translate('review_count', { count: reviewCount })
							: translate('no_reviews')}
					</span>
				</div>
			</div>
		);
	}
);
