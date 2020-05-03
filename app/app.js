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
import LanguageProvider from 'containers/LanguageProvider';

import configureStore from './configureStore';
import { translationMessages } from './i18n';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

function AppRoot() {
  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <App />
      </LanguageProvider>
    </Provider>
  );
}

export default AppRoot;
