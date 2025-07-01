import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { BrowserRouter } from 'react-router';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { CartModalProvider } from './context/CartModalProvider.tsx';
import { NavbarProvider } from './context/NavbarProvider.tsx';
import { LoginModalProvider } from './context/LoginModalProvider.tsx';
import { I18NProvider } from '@ayub-begimkulov/i18n';
import { i18n } from './i18n/i18n.ts';
import 'flag-icons/css/flag-icons.min.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<CartModalProvider>
				<LoginModalProvider>
					<NavbarProvider>
						<BrowserRouter>
							<IconContext.Provider value={{ size: '24px' }}>
								<I18NProvider i18n={i18n}>
									<App />
								</I18NProvider>
							</IconContext.Provider>
						</BrowserRouter>
					</NavbarProvider>
				</LoginModalProvider>
			</CartModalProvider>
		</Provider>
	</StrictMode>
);
