import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import {Provider} from "react-redux" // redux 状态管理配置
import { ThemeProvider } from 'styled-components';

import App from '@/App';
import "normalize.css"
import "antd/dist/antd.less"
import "./assets/css/index.less"
// import "antd/dist/antd.less"
// import 'antd/dist/reset.css';
// import "antd/dist/antd.less"
import store from './store'
import theme from './assets/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
	<Provider store={store}>
		<Suspense fallback="loading"> 
				<ThemeProvider theme={theme}>
					<HashRouter>  
						<App />
						</HashRouter>
				</ThemeProvider>
		</Suspense>
	</Provider>
 
  // </React.StrictMode>
);


