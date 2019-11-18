/**
 * @format
 */

import 'react-native-gesture-handler'; // Navigation Release Mode Crash issue #320
import { AppRegistry } from 'react-native';
import App from './app/app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
