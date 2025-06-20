import { MouseEventHandler, ReactNode, useState } from 'react';
import { UIProductDetailsDropdown } from './UI/UIProductDetailsDropdown';

interface ProductDetailsDropdownProps {
	children?: ReactNode;
	text?: string;
	className?: string;
}

export const ProductDetailsDropdown = ({
	children,
	text,
	className,
}: ProductDetailsDropdownProps) => {
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
