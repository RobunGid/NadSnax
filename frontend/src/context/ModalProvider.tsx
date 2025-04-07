import { ReactNode, useState } from 'react';
import { ModalContext } from './ModalContext';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [modalVisibility, setModalVisibility] = useState<boolean>(false);

	const toggleModalVisibility = () => setModalVisibility((prev) => !prev);

	return (
		<ModalContext.Provider value={{ modalVisibility, toggleModalVisibility }}>
			{children}
		</ModalContext.Provider>
	);
};
