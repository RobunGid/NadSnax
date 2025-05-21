import { ReactNode } from 'react';

type UILoginFormProps = {
	children?: ReactNode;
} & JSX.IntrinsicElements['form'];

export const UILoginForm = (props: UILoginFormProps) => {
	return (
		<form
			{...props}
			className={`
		p-16 flex flex-col items-center
		`}
		/>
	);
};
