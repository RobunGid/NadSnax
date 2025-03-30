import { Navbar } from '../Navbar/Navbar';
import { NavbarProvider } from '../../context/NavbarProvider';

export const Header = () => {
	return (
		<header>
			<NavbarProvider>
				<Navbar />
			</NavbarProvider>
		</header>
	);
};
