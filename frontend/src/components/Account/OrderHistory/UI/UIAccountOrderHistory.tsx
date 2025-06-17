import { ReactNode } from 'react';

interface UIAccountOrderHistoryProps {
	children: ReactNode;
}

export const UIAccountOrderHistory = ({ children }: UIAccountOrderHistoryProps) => {
	return <div>{children}</div>;
};
