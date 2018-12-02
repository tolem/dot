import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { robots } from './robots'
import 'tachyons';



ReactDOM.render(
< App robots={robots}/>
    , document.getElementById('root'));
    registerServiceWorker();