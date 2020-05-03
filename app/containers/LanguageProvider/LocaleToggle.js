/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { View, Picker } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { appLocales } from 'app/i18n';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import messages from './messages';

export function LocaleToggle(props) {
  return (
    <View>
      <Picker
        selectedValue={props.locale}
        style={{ height: 50, width: 50 }}
        onValueChange={itemValue => props.onLocaleToggle(itemValue)}>
        {appLocales.map(locale => (
          <Picker.Item key={locale} label={messages[locale].defaultMessage} value={locale} />
        ))}
      </Picker>
    </View>
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: locale => dispatch(changeLocale(locale)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
