type rating = 'empty' | 'half' | 'full';

export const getRatingStar = (ratingCount: number): rating[] => {
	let flooredRatingCount = Math.floor(ratingCount * 20);

	if (flooredRatingCount > 100) return ['full', 'full', 'full', 'full', 'full'];

	if (flooredRatingCount < 10) return ['empty', 'empty', 'empty', 'empty', 'empty'];

	const resultRatingArray: Array<string> = [];

	while (flooredRatingCount > 10) {
		resultRatingArray.push('full');
		flooredRatingCount -= 20;
	}

	while (flooredRatingCount > 5) {
		resultRatingArray.push('half');
		flooredRatingCount -= 10;
	}

	while (resultRatingArray.length < 5) {
		resultRatingArray.push('empty');
	}

	return resultRatingArray as ['full', 'full', 'full', 'full', 'full'];
};
