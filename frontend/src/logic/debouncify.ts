export const debouncify = <T extends (...args: unknown[]) => unknown>(
	callback: T,
	delay: number
) => {
	let timer: number;

	return (...args: unknown[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => callback(...args), delay);
	};
};
