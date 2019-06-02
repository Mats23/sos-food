import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<AppRouter />, document.getElementById('root'));

serviceWorker.unregister();
