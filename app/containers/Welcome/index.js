/**
 *
 * Welcome
 *
 */

import React from 'react';
import { Text, View, SafeAreaView, Button, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectIntl, intlShape } from 'react-intl';

import LocaleToggle from 'containers/LanguageProvider/LocaleToggle';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWelcome from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import images from 'images';
import { styles } from './styles';

export function Welcome(props) {
  useInjectReducer({ key: 'welcome', reducer });
  useInjectSaga({ key: 'welcome', saga });

  return (
    <SafeAreaView>
      <Image source={images.concept} resizeMode="cover" style={styles.bgImage} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{props.intl.formatMessage(messages.hello)}</Text>
        <Image source={images.logo} resizeMode="contain" />
        <Text style={styles.textBold}>React Native Boilerplate</Text>

        <Text style={styles.text}>{props.intl.formatMessage(messages.explanation)}</Text>

        <View style={styles.infoTextWrapper}>
          <Text styles={styles.text}>{props.intl.formatMessage(messages.goDocs)}</Text>
          <Button
            color="#12D4C1"
            title="--> Github"
            onPress={() => {
              Linking.openURL('https://github.com/keremcubuk/react-native-boilerplate');
            }}
          />
        </View>
        <View style={styles.helpWrapper}>
          <Text styles={styles.text}>{props.intl.formatMessage(messages.readyToDev)} 🚀</Text>
          <Button color="#12D4C1" title="--> Go to Help Screen" onPress={() => props.navigation.navigate('Help')} />
        </View>
        <Text>{props.intl.formatMessage(messages.chooseLanguage)}</Text>
        <LocaleToggle />
      </View>
    </SafeAreaView>
  );
}

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired,
  intl: intlShape,
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

export default compose(withConnect)(injectIntl(Welcome));
