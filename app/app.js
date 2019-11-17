/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

// Import root app
import App from './containers/App';

import configureStore from './configureStore';
import createReducer from './reducers';

// Create redux store with history
const initialState = {};
const store = configureStore(createReducer, initialState);

export let navigatorRef;

function AppRoot() {
  useEffect(() => {
    return () => {
      navigatorRef = this.navigator;
    };
  }, []);

  return (
    <Provider store={store}>
      <App
        ref={nav => {
          this.navigator = nav;
        }}
      />
    </Provider>
  );
}

export default AppRoot;
