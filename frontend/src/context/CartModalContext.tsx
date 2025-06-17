import { createContext } from 'react';

interface CartModalContextInterface {
	cartModalVisibility: boolean;
	isSuccessOrder: boolean;
	toggleCartModalVisibility: () => void;
	changeSuccessOrder: (status: boolean) => void;
}

export const CartModalContext = createContext<CartModalContextInterface>({
	cartModalVisibility: false,
	isSuccessOrder: false,
	toggleCartModalVisibility: () => {},
	changeSuccessOrder: () => {},
});
