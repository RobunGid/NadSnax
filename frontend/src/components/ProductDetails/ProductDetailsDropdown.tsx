import { MouseEventHandler, PropsWithChildren, useState } from 'react';
import { UIProductDetailsDropdown } from './UI/UIProductDetailsDropdown';

interface ProductDetailsDropdownProps {
	text?: string;
	className?: string;
}

export const ProductDetailsDropdown = ({
	children,
	text,
	className,
}: PropsWithChildren<ProductDetailsDropdownProps>) => {
	const [optionsVisibility, setOptionsVisibility] = useState<boolean>(false);

	const handleToggleVisibility: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault();
		event.stopPropagation();
		setOptionsVisibility((prevVisible) => !prevVisible);
	};

	return (
		<UIProductDetailsDropdown
			optionsVisibility={optionsVisibility}
			handleToggleVisibility={handleToggleVisibility}
			className={className}
			text={text}
		>
			{children}
		</UIProductDetailsDropdown>
	);
};
