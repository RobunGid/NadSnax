import { ReactNode } from 'react';

interface UIAccountSettingsLanguageSelectorContainerProps {
	children: ReactNode;
}

export const UIAccountSettingsLanguageSelectorContainer = ({
	children,
}: UIAccountSettingsLanguageSelectorContainerProps) => {
	return <div>{children}</div>;
};
