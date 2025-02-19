import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import { Header } from './components/layout/Header';
import { HomePage } from './components/layout/HomePage';
import { ProductsPage } from './components/layout/ProductsPage';
import { useAppDispatch } from './store';
import { fetchCategories } from './store/categorySlice';
import { useEffect } from 'react';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
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
			</Routes>
		</>
	);
}

export default App;
