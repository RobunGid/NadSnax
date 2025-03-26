import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<IconContext.Provider value={{ size: '24px' }}>
					<App />
				</IconContext.Provider>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
