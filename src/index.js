import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import AlertsProvider from './providers/AlertsProvider';
import store from './app/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AlertsProvider>
				<App />
			</AlertsProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
