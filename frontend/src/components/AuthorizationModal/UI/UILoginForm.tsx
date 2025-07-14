import { ReactNode } from 'react';
import { JSX } from 'react';

type UILoginFormProps = {
	children?: ReactNode;
} & JSX.IntrinsicElements['form'];

export const UILoginForm = (props: UILoginFormProps) => {
	return (
		<form
			{...props}
			className={`
		flex flex-col items-center w-80 h-70 justify-center
		`}
		/>
	);
};
