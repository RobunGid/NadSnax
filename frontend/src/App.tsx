import { Navigate, Route, Routes } from 'react-router';
import { Header } from './components/layout/Header';
import { HomePage } from './components/layout/HomePage';
import { ProductsPage } from './components/layout/ProductsPage';
import { useAppDispatch } from './store';
import { fetchCategories } from './store/categorySlice';
import { useEffect } from 'react';
import ProductDetailsPage from './components/layout/ProductDetailsPage';
function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/products/' element={<ProductsPage />} />
				<Route path='/products/:category/' element={<ProductsPage />} />
				<Route path='/products/:category/:type/' element={<ProductsPage />} />
				<Route
					path='/products/:category/:type/:product'
					element={<ProductDetailsPage />}
				/>
			</Routes>
		</>
	);
}

export default App;
