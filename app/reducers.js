/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
// import languageProviderReducer from 'containers/LanguageProvider/reducer';

import { fromJS } from 'immutable';

const initialState = fromJS({
  root: 'welcome',
  isLoading: false,
});

function AppReducer(state = initialState, action) {
  //******** LOG **************//
  // console.log("AppReducer" , action);
  switch (action.type) {
    default:
      return state;
  }
}
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    RnApp: AppReducer, // If you want, you can change the name of RnApp
    ...injectedReducers,
  });

  return rootReducer;
}

// import { combineReducers } from 'redux-immutable';
