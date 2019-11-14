import * as RNLocalize from 'react-native-localize';
import I18n from 'i18next';

import en from './en';
import fr from './fr';

const locales = RNLocalize.getLocales();

I18n.init({
  debug: true,
  useLocalStorage: true,
  lng: locales[0].languageCode,
  fallbackLng: 'en',
  resources: { fr: { translation: fr }, en: { translation: en }, 'fr-FR': { translation: fr } },
});

export default I18n;
