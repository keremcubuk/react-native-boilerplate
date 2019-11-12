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

// Import Language Provider
// import LanguageProvider from './containers/LanguageProvider';
// import I18n from './localization';
// Import i18n messages
// import { translationMessages } from './i18n';
import configureStore from './configureStore';
import createReducer from './reducers';

// Create redux store with history
const initialState = {};
const store = configureStore(createReducer, initialState);

const renderInternal = messages => (
  <Provider store={store}>
    {/* <LanguageProvider messages={messages}> */}
      <App />
    {/* </LanguageProvider> */}
  </Provider>
);

// const render = () => renderInternal(translationMessages);

// export default render;
export default renderInternal;
