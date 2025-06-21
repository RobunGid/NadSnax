export const formatOrderStatus = (status: string) => {
	return status.charAt(0).toUpperCase() + status.slice(1);
};
