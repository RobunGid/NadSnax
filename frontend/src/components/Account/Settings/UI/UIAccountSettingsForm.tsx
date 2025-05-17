import { FormEventHandler, ReactNode } from 'react';

interface UIAccountSettingsFormProps {
	children: ReactNode;
	onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const UIAccountSettingsForm = ({
	children,
	onSubmit,
}: UIAccountSettingsFormProps) => {
	return (
		<form className='p-4 flex flex-col gap-2' onSubmit={onSubmit}>
			{children}
		</form>
	);
};
