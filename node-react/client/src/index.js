import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainController from './main_controller/MainController';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainController />, document.getElementById('root'));
registerServiceWorker();
