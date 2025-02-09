import { FC, ReactNode, useState } from 'react';
import { NavbarContext } from './NavbarContext';

export const NavbarProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [sidebarVisibility, setSidebarVisibility] = useState<boolean>(false);

	const toggleSidebarVisibility = () => setSidebarVisibility((prev) => !prev);

	return (
		<NavbarContext.Provider value={{ sidebarVisibility, toggleSidebarVisibility }}>
			{children}
		</NavbarContext.Provider>
	);
};
