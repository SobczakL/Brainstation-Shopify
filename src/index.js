import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import translations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import "@shopify/polaris/build/esm/styles.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AppProvider i18n={translations}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppProvider>
	</React.StrictMode>
);
