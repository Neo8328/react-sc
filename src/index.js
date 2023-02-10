import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

document.documentElement.style.fontSize = 100 / 750 + 'vw';
// console.log(window.location.pathname)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename={window.location.pathname || ''}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  
);

