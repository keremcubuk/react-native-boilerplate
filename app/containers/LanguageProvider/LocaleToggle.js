/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { Picker } from '@react-native-picker/picker';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { appLocales } from 'app/i18n';
import { changeLocale } from './actions';
import { makeSelectLocale } from './selectors';
import messages from './messages';

export function LocaleToggle(props) {
  return (
    <Picker
      selectedValue={props.locale}
      style={{ height: 50, width: 100 }}
      onValueChange={itemValue => props.onLocaleToggle(itemValue)}>
      {appLocales.map(locale => (
        <Picker.Item key={locale} label={messages[locale].defaultMessage} value={locale} />
      ))}
    </Picker>
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({ locale }));

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: locale => dispatch(changeLocale(locale)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
