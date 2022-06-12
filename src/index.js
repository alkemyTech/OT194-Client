import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import AlertsProvider from './providers/AlertsProvider';
import store from './app/store';

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<AlertsProvider>
					<App />
				</AlertsProvider>
			</Provider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);
