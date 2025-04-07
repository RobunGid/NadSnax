import { createContext } from 'react';

interface IModalContext {
	modalVisibility: boolean;
	toggleModalVisibility: () => void;
}

export const ModalContext = createContext<IModalContext>({
	modalVisibility: false,
	toggleModalVisibility: () => {},
});
