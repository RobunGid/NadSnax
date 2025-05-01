import { ReactNode, useState } from 'react';
import { LoginModalContext } from './LoginModalContext';

export const LoginModalProvider = ({ children }: { children: ReactNode }) => {
	const [loginModalVisibility, setLoginModalVisibility] = useState<boolean>(false);

	const toggleLoginModalVisibility = () => setLoginModalVisibility((prev) => !prev);

	const disableLoginModalVisibility = () => setLoginModalVisibility(false);

	return (
		<LoginModalContext.Provider
			value={{
				loginModalVisibility,
				toggleLoginModalVisibility,
				disableLoginModalVisibility,
			}}
		>
			{children}
		</LoginModalContext.Provider>
	);
};
