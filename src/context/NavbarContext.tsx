import { createContext } from 'react';

export const NavbarContext = createContext({
	sidebarVisibility: false,
	toggleSidebarVisibility: () => {},
});
