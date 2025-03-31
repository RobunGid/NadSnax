import { Navbar } from '../Navbar/Navbar';
import { NavbarProvider } from '../../context/NavbarProvider';
import { Sidebar } from '../Sidebar/Sidebar';
import { useStateSelector } from '../../store';

export const Header = () => {
	const categories = useStateSelector((state) => state.category.categoryList);

	return (
		<header>
			<NavbarProvider>
				<Navbar categories={categories} />
				<Sidebar categories={categories} />
			</NavbarProvider>
		</header>
	);
};
