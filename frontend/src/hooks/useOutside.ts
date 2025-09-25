import { RefObject, useEffect } from 'react';

interface useOutsideParams {
	onClickOutside: () => void;
	element: RefObject<HTMLElement | null>;
	ignoredElements?: RefObject<HTMLElement | null>[];
}

export const useOutside = ({
	onClickOutside,
	element,
	ignoredElements = [],
}: useOutsideParams) => {
	const handleClickOutside = (event: MouseEvent): void => {
		event.stopPropagation();
		if (
			element.current &&
			!element.current.contains(event.target as Node) &&
			!ignoredElements.some(
				(ref) => ref.current && ref.current.contains(event.target as Node)
			)
		) {
			onClickOutside();
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
