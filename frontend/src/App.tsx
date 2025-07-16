import { Navigate, Route, Routes } from 'react-router';
import { Header } from './components/Header/Header';
import { HomePage } from './components/Pages/HomePage';
import { ProductsPage } from './components/Pages/ProductsPage';
import { fetchUser, refreshThunk, useAppDispatch } from './store';
import { fetchCategories } from './store/categorySlice';
import { useEffect } from 'react';
import { ProductDetailsPage } from './components/Pages/ProductDetailsPage';
import { ScrollToTop } from './components/Layout/ScrollToTop';
import { AccountPage } from './components/Pages/AccountPage';
import { getAppTheme } from './logic/getAppTheme';
import { LoginModal } from './components/AuthorizationModal/AuthozationModal';
import { CartModal } from './components/CartModal/CartModal';
import { PrivateRoutes } from './components/Layout/PrivateRoutes';
import { ControlPanelPage } from './components/Pages/ControlPanelPage';
import { useI18n } from './i18n/i18n';
import { languages } from './logic/languages';
import { predicateLanguageCode } from './types';

export const App = () => {
	const dispatch = useAppDispatch();

	const { lang, setLang } = useI18n();

	useEffect(() => {
		dispatch(fetchCategories({ lang }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lang]);

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

	useEffect(() => {
		const savedLang = sessionStorage.getItem('lang');
		const languageKeys = languages.map((lang) => lang.key);
		if (
			typeof savedLang == 'string' &&
			predicateLanguageCode(savedLang) &&
			languageKeys.includes(savedLang) &&
			savedLang != lang
		) {
			setLang(savedLang);
		}
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
					<Route
						element={<PrivateRoutes roles={['admin', 'moderator', 'user']} />}
					>
						<Route path='/account' element={<AccountPage />} />
						<Route path='/account/:section' element={<AccountPage />} />
					</Route>
					<Route element={<PrivateRoutes roles={['admin', 'moderator']} />}>
						<Route
							path='/control-panel/:section'
							element={<ControlPanelPage />}
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
