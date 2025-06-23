export enum RatingType {
	Empty = 'empty',
	Half = 'half',
	Full = 'full',
}
export type FullRating = [RatingType, RatingType, RatingType, RatingType, RatingType];

export const getRatingStar = (ratingCount: number | null): FullRating => {
	if (ratingCount == null || ratingCount <= 0) {
		return Array.from({ length: 5 }, () => 'empty') as FullRating;
	}

	if (ratingCount >= 5) {
		return Array.from({ length: 5 }, () => 'full') as FullRating;
	}

	const fullStars: RatingType[] = Array.from(
		{ length: Math.round(ratingCount) },
		() => RatingType.Full
	);

	const halfStar: RatingType = Math.round(ratingCount % 1)
		? RatingType.Half
		: RatingType.Empty;

	const fullAndHalfStars = fullStars.concat(halfStar);

	const resultStars: FullRating = fullAndHalfStars.concat(
		Array.from({ length: 5 - fullAndHalfStars.length }, () => RatingType.Empty)
	) as FullRating;

	return resultStars;
};
