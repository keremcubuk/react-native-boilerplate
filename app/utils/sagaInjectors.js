import invariant from 'invariant';
import { isEmpty, isFunction, isString, conformsTo, has } from 'lodash';

import checkStore from './checkStore';
import { DAEMON, ONCE_TILL_UNMOUNT, RESTART_ON_REMOUNT } from './constants';

const allowedModes = [RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT];

const checkKey = key =>
  invariant(isString(key) && !isEmpty(key), '(app/utils...) injectSaga: Expected `key` to be a non empty string');

const checkDescriptor = descriptor => {
  const shape = {
    saga: isFunction,
    mode: mode => isString(mode) && allowedModes.includes(mode),
  };
  invariant(conformsTo(descriptor, shape), '(app/utils...) injectSaga: Expected a valid saga descriptor');
};

export function injectSagaFactory(store, isValid) {
  return function injectSaga(key, descriptor = {}, args) {
    if (!isValid) {
      checkStore(store);
    }

    const newDescriptor = { ...descriptor, mode: descriptor.mode || DAEMON };
    const { saga } = newDescriptor;

    checkKey(key);
    checkDescriptor(newDescriptor);

    let hasSaga = has(store.injectedSagas, key);

    if (!hasSaga) {
      store.injectedSagas[key] = { ...newDescriptor, task: store.runSaga(saga, args) }; // eslint-disable-line no-param-reassign
    }
  };
}

export function ejectSagaFactory(store, isValid) {
  return function ejectSaga(key) {
    if (!isValid) {
      checkStore(store);
    }

    checkKey(key);

    if (has(store.injectedSagas, key)) {
      const descriptor = store.injectedSagas[key];
      if (descriptor.mode && descriptor.mode !== DAEMON) {
      }
    }
  };
}

export default function getInjectors(store) {
  checkStore(store);

  return {
    injectSaga: injectSagaFactory(store, true),
    ejectSaga: ejectSagaFactory(store, true),
  };
}
