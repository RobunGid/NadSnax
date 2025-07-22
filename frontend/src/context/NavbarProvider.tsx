import { ReactNode, useState } from 'react';
import { NavbarContext } from './NavbarContext';

interface NavbarProviderProps {
	children: ReactNode;
}

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
	const [sidebarVisibility, setSidebarVisibility] = useState<boolean>(false);

	const toggleSidebarVisibility = () => setSidebarVisibility((prev) => !prev);
	const hideSidebarVisibility = () => setSidebarVisibility(false);
	const showSidebarVisibility = () => setSidebarVisibility(true);

	return (
		<NavbarContext.Provider
			value={{
				sidebarVisibility,
				toggleSidebarVisibility,
				hideSidebarVisibility,
				showSidebarVisibility,
			}}
		>
			{children}
		</NavbarContext.Provider>
	);
};
