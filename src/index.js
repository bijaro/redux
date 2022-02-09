import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// bootstrap css and js
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



