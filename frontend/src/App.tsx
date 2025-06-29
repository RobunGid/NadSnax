import { Navigate, Route, Routes } from 'react-router';
import { Header } from './components/Header/Header';
import { HomePage } from './components/Pages/HomePage';
import { ProductsPage } from './components/Pages/ProductsPage';
import { fetchUser, refreshThunk, useAppDispatch, useStateSelector } from './store';
import { fetchCategories } from './store/categorySlice';
import { useEffect } from 'react';
import { ProductDetailsPage } from './components/Pages/ProductDetailsPage';
import { ScrollToTop } from './components/Layout/ScrollToTop';
import { AccountPage } from './components/Pages/AccountPage';
import { getAppTheme } from './logic/getAppTheme';
import { LoginModal } from './components/AuthorizationModal/AuthozationModal';
import { CartModal } from './components/CartModal/CartModal';
import { PrivateRoutes } from './components/Layout/PrivateRoutes';
import { AdminPanelPage } from './components/Pages/AdminPanelPage';

export const App = () => {
	const dispatch = useAppDispatch();

	const categoriesStatus = useStateSelector((state) => state.category.status);

	useEffect(() => {
		if (categoriesStatus === 'init') dispatch(fetchCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		(async () => {
			await dispatch(refreshThunk());
			await dispatch(fetchUser());
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const theme = getAppTheme();

		document.documentElement.classList.add(theme);

		document.body.classList.add('dark:bg-gray-900');
		document.body.classList.add('dark:text-white');
	}, []);

	return (
		<>
			<Header />
			<ScrollToTop />
			<CartModal />
			<LoginModal />
			<main>
				<Routes>
					<Route path='/' element={<Navigate to='/home' />} />
					<Route element={<PrivateRoutes />}>
						<Route path='/account' element={<AccountPage />} />
						<Route path='/account/:section' element={<AccountPage />} />
						<Route path='/admin-panel' element={<AdminPanelPage />} />
						<Route
							path='/admin-panel/:section'
							element={<AdminPanelPage />}
						/>
					</Route>

					<Route path='/home' element={<HomePage />} />
					<Route path='/products/' element={<ProductsPage />} />
					<Route path='/products/:category/' element={<ProductsPage />} />
					<Route path='/products/:category/:type/' element={<ProductsPage />} />
					<Route
						path='/products/page/:product'
						element={<ProductDetailsPage />}
					/>
				</Routes>
			</main>
		</>
	);
};
