import { ReactNode, useState } from 'react';
import { LoginModalContext } from './LoginModalContext';

export const LoginModalProvider = ({ children }: { children: ReactNode }) => {
	const [loginModalVisibility, setLoginModalVisibility] = useState<boolean>(false);

	const toggleLoginModalVisibility = () => setLoginModalVisibility((prev) => !prev);

	return (
		<LoginModalContext.Provider
			value={{ loginModalVisibility, toggleLoginModalVisibility }}
		>
			{children}
		</LoginModalContext.Provider>
	);
};
