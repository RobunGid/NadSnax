const intlFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
});
export const formatPrice = (price: number) => intlFormatter.format(price);
