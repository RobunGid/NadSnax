import { FC } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { NavbarProvider } from '../../context/NavbarProvider';

export const Header: FC = () => {
	return (
		<header>
			<NavbarProvider>
				<Navbar />
			</NavbarProvider>
		</header>
	);
};
