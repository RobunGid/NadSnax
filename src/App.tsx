import './App.css';
import logo from './assets/logo.png';

function App() {
	return (
		<div className='flex justify-center items-center gap-3'>
			<img src={logo} alt='logo' width='80' />
			<h1 className='text-3xl font-bold'>NadSnax - Crunch into happiness!</h1>
		</div>
	);
}

export default App;
