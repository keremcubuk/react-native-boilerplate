import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the welcome state domain
 */

const selectWelcomeDomain = state => state.welcome || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Welcome
 */

const makeSelectWelcome = () =>
  createSelector(
    selectWelcomeDomain,
    substate => substate,
  );

export default makeSelectWelcome;
export { selectWelcomeDomain };
