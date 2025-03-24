import { ReactNode, useState } from 'react';
import { NavbarContext } from './NavbarContext';

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
	const [sidebarVisibility, setSidebarVisibility] = useState<boolean>(false);

	const toggleSidebarVisibility = () => setSidebarVisibility((prev) => !prev);

	return (
		<NavbarContext.Provider value={{ sidebarVisibility, toggleSidebarVisibility }}>
			{children}
		</NavbarContext.Provider>
	);
};
