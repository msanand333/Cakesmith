import RoleUpdater from 'components/role-updater.js';
import { CartProvider } from 'context/cart-context';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
      <RoleUpdater />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


