//import library to create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create Component
const App = () => (
    <Header headerText={'Albums'}/>
  );

//render it to the device. Only the root component needs to be registered
AppRegistry.registerComponent('albumsProject', () => App);
