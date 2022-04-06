import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
// import { toast } from 'react-hot-toast';
import axios from 'axios';

const container = document.getElementById('root');
const root = createRoot(container);

axios.defaults.baseURL =
	'https://afternoon-ridge-35420.herokuapp.com/http://giropay.xyz/api/v1/giro-app/';

// axios.interceptors.response.use(
// 	(response) => {
// 		console.log(response);
// 		// Edit response config
// 		return response;
// 	},
// 	(error) => {
// 		const errorMsg = error?.response.data.Error;
// 		toast.error(errorMsg, { duration: 4000 });
// 		return Promise.reject(error);
// 	}
// );

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
