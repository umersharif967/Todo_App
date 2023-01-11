import React from 'react';
import ReactDOM from 'react-dom/client';
import  MainPage  from './pages/MainPage';
import store from './store/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<MainPage />
		</Provider>
	</React.StrictMode>
);
