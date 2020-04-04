/**
 *
 * Welcome
 *
 */

import React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'localization';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWelcome from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Welcome({ route, navigation }) {
  useInjectReducer({ key: 'welcome', reducer });
  useInjectSaga({ key: 'welcome', saga });

  return (
    <SafeAreaView>
      <Text>
        {I18n.t('firstMessage.hello')} {route.name} Container!
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
}

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  welcome: makeSelectWelcome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Welcome);
