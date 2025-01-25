import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { IconContext } from 'react-icons';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<IconContext.Provider value={{ size: '24px' }}>
				<App />
			</IconContext.Provider>
		</BrowserRouter>
	</StrictMode>
);
