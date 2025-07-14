import { ReactNode } from 'react';
import { JSX } from 'react';

type UIRegisterFormProps = {
	children?: ReactNode;
} & JSX.IntrinsicElements['form'];

export const UIRegisterForm = (props: UIRegisterFormProps) => {
	return (
		<form
			{...props}
			className={`
		flex flex-col items-center w-80 h-100 justify-center
		`}
		/>
	);
};
