/**
 *
 * Welcome
 *
 */

import React from 'react';
import { Text, View, SafeAreaView, Button, Image, Linking, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useIntl } from 'react-intl';

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
  const { formatMessage } = useIntl();
  useInjectReducer({ key: 'welcome', reducer });
  useInjectSaga({ key: 'welcome', saga });

  return (
    <SafeAreaView>
      <Image source={images.concept} resizeMode="cover" style={styles.bgImage} />
      <ScrollView style={{ minHeight: Dimensions.get('window').height }}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{formatMessage(messages.hello)}</Text>
          <Image source={images.logo} resizeMode="contain" />
          <Text style={styles.textBold}>React Native Boilerplate</Text>

          <Text style={styles.text}>{formatMessage(messages.explanation)}</Text>

          <View style={styles.infoTextWrapper}>
            <Text styles={styles.text}>{formatMessage(messages.goDocs)}</Text>
            <Button
              color="#12D4C1"
              title="--> Github"
              onPress={() => {
                Linking.openURL('https://github.com/keremcubuk/react-native-boilerplate');
              }}
            />
          </View>
          <View style={styles.helpWrapper}>
            <Text styles={styles.text}>{formatMessage(messages.readyToDev)} 🚀</Text>
            <Button color="#12D4C1" title="--> Go to Help Screen" onPress={() => props.navigation.navigate('Help')} />
          </View>
          <View style={styles.langWrapper}>
            <Text>{formatMessage(messages.chooseLanguage)}</Text>
            <View style={styles.localeWrapper}>
              <LocaleToggle />
            </View>
          </View>
        </View>
      </ScrollView>
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

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Welcome);
