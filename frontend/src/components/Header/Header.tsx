import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { useStateSelector } from '../../store';

export const Header = () => {
	const categories = useStateSelector((state) => state.category.categoryList);

	return (
		<header>
			<Navbar categories={categories} />
			<Sidebar categories={categories} />
		</header>
	);
};
