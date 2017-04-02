//import library to create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create Component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//render it to the device. Only the root component needs to be registered
AppRegistry.registerComponent('albumsProject', () => App);
