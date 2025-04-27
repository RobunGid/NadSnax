import { ReactNode, useState } from 'react';
import { CartModalContext } from './CartModalContext';

export const CartModalProvider = ({ children }: { children: ReactNode }) => {
	const [cartModalVisibility, setCartModalVisibility] = useState<boolean>(false);

	const toggleCartModalVisibility = () => setCartModalVisibility((prev) => !prev);

	return (
		<CartModalContext.Provider
			value={{ cartModalVisibility, toggleCartModalVisibility }}
		>
			{children}
		</CartModalContext.Provider>
	);
};
