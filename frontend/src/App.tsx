import { Navigate, Route, Routes } from 'react-router';
import { Header } from './components/Header/Header';
import { HomePage } from './components/Pages/HomePage';
import { ProductsPage } from './components/Pages/ProductsPage';
import { lazy, Suspense } from 'react';
import { ProductDetailsPage } from './components/Pages/ProductDetailsPage';
import { ScrollToTop } from './components/Layout/ScrollToTop';
import { AccountPage } from './components/Pages/AccountPage';
import { LoginModal } from './components/AuthorizationModal/AuthozationModal';
import { CartModal } from './components/CartModal/CartModal';
import { PrivateRoutes } from './components/Layout/PrivateRoutes';
import { useInitTheme } from './hooks/useInitTheme';
import { useInitLang } from './hooks/useInitLang';
import { useInitUser } from './hooks/useInitUser';
import { useInitCategories } from './hooks/useInitCategories';
import { useAuth } from './hooks/useAuth';
import { useLoadUser } from './hooks/useLoadUser';

export const App = () => {
	useInitTheme();
	useInitLang();
	useInitUser();
	useInitCategories();
	const { isAuthenticated } = useAuth();
	const { user } = useLoadUser();

	const ControlPanelPage = lazy(() =>
		import('./components/Pages/ControlPanelPage').then((module) => ({
			default: module.ControlPanelPage,
		}))
	);

	return (
		<>
			<Header />
			<ScrollToTop />
			<CartModal />
			<LoginModal />
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path='/' element={<Navigate to='/home' />} />
						<Route
							element={
								<PrivateRoutes
									roles={['admin', 'moderator', 'user']}
									isAuthenticated={isAuthenticated}
									user={user}
								/>
							}
						>
							<Route path='/account' element={<AccountPage />} />
							<Route path='/account/:section' element={<AccountPage />} />
						</Route>
						<Route
							element={
								<PrivateRoutes
									roles={['admin', 'moderator']}
									isAuthenticated={isAuthenticated}
									user={user}
								/>
							}
						>
							<Route
								path='/control-panel/:section'
								element={<ControlPanelPage />}
							/>
						</Route>

						<Route path='/home' element={<HomePage />} />
						<Route path='/products/' element={<ProductsPage />} />
						<Route path='/products/:category/' element={<ProductsPage />} />
						<Route
							path='/products/:category/:type/'
							element={<ProductsPage />}
						/>
						<Route
							path='/products/page/:productName'
							element={<ProductDetailsPage />}
						/>
					</Routes>
				</Suspense>
			</main>
		</>
	);
};
