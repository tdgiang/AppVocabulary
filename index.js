/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import app from './src/app';

import test from './src/component/test';

AppRegistry.registerComponent(appName, () => app);
