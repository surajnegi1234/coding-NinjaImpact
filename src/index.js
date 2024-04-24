import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-r86866iq7uuho5r2.us.auth0.com"
    clientId="tpsdqeCGcEuvBZjuP4F4thnyk4WSFRdO"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App />
    </Auth0Provider>
    
  </React.StrictMode>
);


