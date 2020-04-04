/**
 *
 * Welcome
 *
 */

import React from 'react';
import { Text, View, SafeAreaView, Button, Image, Linking } from 'react-native';
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
import images from 'images';
import { styles } from './styles';

export function Welcome({ navigation }) {
  useInjectReducer({ key: 'welcome', reducer });
  useInjectSaga({ key: 'welcome', saga });

  return (
    <SafeAreaView>
      <Image source={images.concept} resizeMode="cover" style={styles.bgImage} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{I18n.t('firstMessage.hello')}</Text>
        <Image source={images.logo} resizeMode="contain" />
        <Text style={styles.textBold}>React Native Boilerplate</Text>

        <Text style={styles.text}>
          A highly scalable, react-native boilerplate reinforced with react-boilerplate which focus on performance and
          best practices.
        </Text>

        <View style={styles.infoTextWrapper}>
          <Text styles={styles.text}>To learn how to use react-native-boilerplate?</Text>
          <Button
            color="#12D4C1"
            title="--> Github"
            onPress={() => {
              Linking.openURL('https://github.com/keremcubuk/react-native-boilerplate');
            }}
          />
        </View>
        <View style={styles.helpWrapper}>
          <Text styles={styles.text}>Now, you are ready to start development 🚀</Text>
          <Button color="#12D4C1" title="--> Go to Help Screen" onPress={() => navigation.navigate('Help')} />
        </View>
      </View>
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
