import { JSX } from 'react';

type UIRegisterFormProps = JSX.IntrinsicElements['form'];

export const UIRegisterForm = (props: UIRegisterFormProps) => {
	return (
		<form
			{...props}
			className={`
		flex flex-col items-center w-80 justify-center gap-4
		`}
		/>
	);
};
