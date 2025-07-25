import { JSX } from 'react';

type UILoginFormProps = JSX.IntrinsicElements['form'];

export const UILoginForm = (props: UILoginFormProps) => {
	return (
		<form
			{...props}
			className={`
		flex flex-col items-center w-80 justify-center gap-4
		`}
		/>
	);
};
