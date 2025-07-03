import { RefObject, useEffect } from 'react';

interface useOutsideParams {
	onClickOutside: () => void;
	element: RefObject<HTMLElement | null>;
}

export const useOutside = ({ onClickOutside, element }: useOutsideParams) => {
	const handleClickOutside = (event: MouseEvent): void => {
		event.stopPropagation();
		if (
			element.current &&
			event.target != element.current &&
			!element.current.contains(event.target as Node)
		) {
			onClickOutside();
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);
};
