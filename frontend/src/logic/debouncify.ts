export const debouncify = <T extends Function>(callback: T, delay: number) => {
	let timer: number;

	return (...args: unknown[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => callback(...args), delay);
	};
};
