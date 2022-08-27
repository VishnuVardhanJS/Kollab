/**
 * @format
 */


import {AppRegistry} from 'react-native';
import firebase from './src/firebase';
import Select from './src/Screens/Select';
import Home from './src/Screens/Home';
import App from './App';
import CreateGroup from './src/Screens/CreateGroup';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
