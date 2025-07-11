import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { useStateSelector } from '../../store';
import { useContext, useRef } from 'react';
import { NavbarContext } from '../../context/NavbarContext';
import { useOutside } from '../../hooks/useOutside';

export const Header = () => {
	const categories = useStateSelector((state) => state.category.categoryList);

	const sidebarRef = useRef<HTMLDivElement | null>(null);
	const openSidebarButtonRef = useRef<HTMLButtonElement | null>(null);

	const { hideSidebarVisibility } = useContext(NavbarContext);

	const handleClickOutsideSidebar = () => {
		hideSidebarVisibility();
	};

	useOutside({
		onClickOutside: handleClickOutsideSidebar,
		element: sidebarRef,
		ignoredElements: [openSidebarButtonRef],
	});

	return (
		<header>
			<Navbar categories={categories} openSidebarButtonRef={openSidebarButtonRef} />
			<Sidebar categories={categories} ref={sidebarRef} />
		</header>
	);
};
