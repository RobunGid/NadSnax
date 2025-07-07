import { ReactNode } from 'react';

interface UIAccountFavoritesContainerProps {
	children: ReactNode;
}

export const UIAccountFavoritesContainer = ({
	children,
}: UIAccountFavoritesContainerProps) => {
	return <div className='flex flex-row h-full w-full flex-wrap gap-10'>{children}</div>;
};
