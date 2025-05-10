export const formatReviewDate = (dateString: string) => {
	const date = new Date(dateString);
	const [month, day, year] = [
		date.toLocaleString('default', { month: 'long' }),
		date.getDate(),
		date.getFullYear(),
	];
	return `${day} ${month}, ${year}`;
};
