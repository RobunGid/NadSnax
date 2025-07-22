import { FormEventHandler, PropsWithChildren } from 'react';

interface UIAccountSettingsFormProps {
	onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const UIAccountSettingsForm = ({
	children,
	onSubmit,
}: PropsWithChildren<UIAccountSettingsFormProps>) => {
	return (
		<form className='p-4 flex flex-col gap-2' onSubmit={onSubmit}>
			{children}
		</form>
	);
};
