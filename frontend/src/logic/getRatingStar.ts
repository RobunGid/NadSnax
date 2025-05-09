type Rating = 'empty' | 'half' | 'full';
export type FullRating = [Rating, Rating, Rating, Rating, Rating];

export const getRatingStar = (ratingCount: number | null): FullRating => {
	if (ratingCount == null || ratingCount <= 0) {
		return Array.from({ length: 5 }, () => 'empty') as FullRating;
	}

	if (ratingCount >= 5) {
		return Array.from({ length: 5 }, () => 'full') as FullRating;
	}

	const fullStars: Rating[] = Array.from(
		{ length: Math.round(ratingCount) },
		() => 'full'
	);

	const halfStar: Rating = Math.round(ratingCount % 1) ? 'half' : 'empty';

	const fullAndHalfStars = fullStars.concat(halfStar);

	const resultStars: FullRating = fullAndHalfStars.concat(
		Array.from({ length: 5 - fullAndHalfStars.length }, () => 'empty')
	) as FullRating;

	return resultStars;
};
