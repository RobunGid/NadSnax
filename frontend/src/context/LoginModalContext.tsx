import { createContext } from 'react';

interface ModalContextInterface {
	loginModalVisibility: boolean;
	toggleLoginModalVisibility: () => void;
}

export const LoginModalContext = createContext<ModalContextInterface>({
	loginModalVisibility: false,
	toggleLoginModalVisibility: () => {},
});
