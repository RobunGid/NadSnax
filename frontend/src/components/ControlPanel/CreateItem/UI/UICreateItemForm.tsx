import { FormEventHandler, ReactNode } from 'react';

interface UICreateItemFormProps {
	children: ReactNode;
	onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const UICreateItemForm = ({ children, onSubmit }: UICreateItemFormProps) => {
	return (
		<form className='flex flex-col gap-4' onSubmit={onSubmit}>
			{children}
		</form>
	);
};
