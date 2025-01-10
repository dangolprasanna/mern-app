// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
window.$ = window.jQuery = $;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
