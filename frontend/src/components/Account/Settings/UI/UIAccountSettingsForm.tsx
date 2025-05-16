import { ReactNode } from 'react';

interface UIAccountSettingsFormProps {
	children: ReactNode;
}

export const UIAccountSettingsForm = ({ children }: UIAccountSettingsFormProps) => {
	return <form className='p-4 flex flex-col gap-2'>{children}</form>;
};
