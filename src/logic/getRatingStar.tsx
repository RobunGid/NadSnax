import { ReactElement } from 'react';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

export const getRatingStar = (ratingCount: number): ReactElement[] => {
	let flooredRatingCount = Math.floor(ratingCount * 20);

	if (flooredRatingCount > 100)
		return [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />];

	if (flooredRatingCount < 10)
		return [
			<IoMdStarOutline />,
			<IoMdStarOutline />,
			<IoMdStarOutline />,
			<IoMdStarOutline />,
			<IoMdStarOutline />,
		];

	const resultRatingArray = [];

	while (flooredRatingCount > 10) {
		resultRatingArray.push(<IoMdStar />);
		flooredRatingCount -= 20;
	}

	while (flooredRatingCount > 5) {
		resultRatingArray.push(<IoMdStarHalf />);
		flooredRatingCount -= 10;
	}

	while (resultRatingArray.length < 5) {
		resultRatingArray.push(<IoMdStarOutline />);
	}

	return resultRatingArray;
};
