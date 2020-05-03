/*
 * Welcome Messages
 *
 * This contains all the text for the Welcome container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Welcome';

export default defineMessages({
  hello: {
    id: `${scope}.hello`,
    defaultMessage: 'Hello from',
  },
  chooseLanguage: {
    id: `${scope}.chooseLanguage`,
    defaultMessage: 'Choose Language',
  },
  explanation: {
    id: `${scope}.explanation`,
    defaultMessage:
      'A highly scalable, react-native boilerplate reinforced with react-boilerplate which focus on performance and best practices.',
  },
  goDocs: {
    id: `${scope}.goDocs`,
    defaultMessage: 'To learn how to use react-native-boilerplate?',
  },
  readyToDev: {
    id: `${scope}.readyToDev`,
    defaultMessage: 'Now, you are ready to start development',
  },
});
