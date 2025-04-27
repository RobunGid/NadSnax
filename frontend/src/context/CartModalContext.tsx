import { createContext } from 'react';

interface CartModalContextInterface {
	cartModalVisibility: boolean;
	toggleCartModalVisibility: () => void;
}

export const CartModalContext = createContext<CartModalContextInterface>({
	cartModalVisibility: false,
	toggleCartModalVisibility: () => {},
});
