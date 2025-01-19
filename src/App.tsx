import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import { Header } from './components/layout/Header';
import { About } from './components/layout/About';
import { BestSellers } from './components/layout/BestSellers';
import { SecretBoxes } from './components/layout/SecretBoxes';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/about' />} />
				<Route path='/about' element={<About />} />
				<Route path='/best-sellers' element={<BestSellers />} />
				<Route path='/secret-boxes' element={<SecretBoxes />} />
			</Routes>
		</>
	);
}

export default App;
