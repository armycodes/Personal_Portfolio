import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// We are importing the styles here to ensure they load globally
import './styles/Terminal.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);