import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'

axios.defaults.baseURL = "https://cooper-calculator.herokuapp.com/api/v1";

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();