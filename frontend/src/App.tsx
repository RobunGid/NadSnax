import { Navigate, Route, Routes } from 'react-router';
import { Header } from './components/Header/Header';
import { HomePage } from './components/Pages/HomePage';
import { ProductsPage } from './components/Pages/ProductsPage';
import { fetchUser, useAppDispatch, useStateSelector } from './store';
import { fetchCategories } from './store/categorySlice';
import { useEffect } from 'react';
import { ProductDetailsPage } from './components/Pages/ProductDetailsPage';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { AccountPage } from './components/Pages/AccountPage';

export const App = () => {
	const dispatch = useAppDispatch();

	const categoriesStatus = useStateSelector((state) => state.category.status);
	const userStatus = useStateSelector((state) => state.user.status);

	useEffect(() => {
		if (categoriesStatus === 'init') dispatch(fetchCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (userStatus === 'init') dispatch(fetchUser());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const theme = localStorage.getItem('theme');

		document.documentElement.classList.toggle(
			'dark',
			theme === 'dark' ||
				(!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		);
		document.body.classList.add('dark:bg-gray-900');
		document.body.classList.add('dark:text-white');
	}, []);

	return (
		<>
			<Header />
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/account' element={<AccountPage />} />
				<Route path='/account/:section' element={<AccountPage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/products/' element={<ProductsPage />} />
				<Route path='/products/:category/' element={<ProductsPage />} />
				<Route path='/products/:category/:type/' element={<ProductsPage />} />
				<Route path='/products/page/:product' element={<ProductDetailsPage />} />
			</Routes>
		</>
	);
};
