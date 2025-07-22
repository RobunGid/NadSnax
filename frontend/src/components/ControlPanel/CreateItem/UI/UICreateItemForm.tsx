import { FormEventHandler, PropsWithChildren } from 'react';

interface UICreateItemFormProps {
	onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const UICreateItemForm = ({
	children,
	onSubmit,
}: PropsWithChildren<UICreateItemFormProps>) => {
	return (
		<form className='flex flex-col gap-4' onSubmit={onSubmit}>
			{children}
		</form>
	);
};
