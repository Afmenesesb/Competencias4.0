import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev--ersqad4.us.auth0.com" 
    clientId="CsHykGR1VojhJZOBhM7aZtaLgv4BAz8c" 
    redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
