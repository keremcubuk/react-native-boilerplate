import * as RNLocalize from 'react-native-localize';
import I18n from 'i18next';

import en from './en';
import tr from './tr';

const locales = RNLocalize.getLocales();

I18n.init({
  debug: true,
  useLocalStorage: true,
  // lng: locales[0].languageCode, // Geçici olarak kapatıldı. Default Türkçe istendi.
  lng: 'tr',
  fallbackLng: 'tr',
  resources: { tr: { translation: tr }, en: { translation: en }, 'tr-TR': { translation: tr } },
});

export default I18n;
