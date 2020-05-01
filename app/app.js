/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react';
import { Provider } from 'react-redux';

// Import root app
import App from './containers/App';

import configureStore from './configureStore';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

function AppRoot() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppRoot;
