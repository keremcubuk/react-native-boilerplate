/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Root, StyleProvider } from 'native-base';

// Import root app
import App from './containers/App';

import configureStore from './configureStore';
import createReducer from './reducers';
import getTheme from 'theme/components';
import commonColor from 'theme/variables/commonColor';

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
    <StyleProvider style={getTheme(commonColor)}>
      <Root>
        <Provider store={store}>
          <App
            ref={nav => {
              this.navigator = nav;
            }}
          />
        </Provider>
      </Root>
    </StyleProvider>
  );
}

export default AppRoot;
