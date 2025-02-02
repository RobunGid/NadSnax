import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import { Header } from './components/layout/Header';
import { HomePage } from './components/layout/HomePage';
import { SecretBoxesPage } from './components/layout/SecretBoxesPage';
import { ProductsPage } from './components/layout/ProductsPage';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/secret-boxes' element={<SecretBoxesPage />} />
				<Route path='/products/' element={<ProductsPage />} />
				<Route path='/products/:category/' element={<ProductsPage />} />
				<Route path='/products/:category/:type/' element={<ProductsPage />} />
			</Routes>
		</>
	);
}

export default App;
