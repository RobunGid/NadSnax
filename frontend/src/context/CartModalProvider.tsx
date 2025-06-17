import { ReactNode, useState } from 'react';
import { CartModalContext } from './CartModalContext';

export const CartModalProvider = ({ children }: { children: ReactNode }) => {
	const [cartModalVisibility, setCartModalVisibility] = useState<boolean>(false);
	const [isSuccessOrder, setIsSuccessOrder] = useState<boolean>(false);

	const toggleCartModalVisibility = () => setCartModalVisibility((prev) => !prev);
	const changeSuccessOrder = (status: boolean) => setIsSuccessOrder(status);

	return (
		<CartModalContext.Provider
			value={{
				cartModalVisibility,
				toggleCartModalVisibility,
				isSuccessOrder,
				changeSuccessOrder,
			}}
		>
			{children}
		</CartModalContext.Provider>
	);
};
