import { ReactNode } from 'react';

interface UIAccountFavoritesProps {
	children: ReactNode;
}

export const UIAccountFavorites = ({ children }: UIAccountFavoritesProps) => {
	return <div className='flex flex-row h-full w-full flex-wrap'>{children}</div>;
};
