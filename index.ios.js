//import library to create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create Component
// flex1 property is added to let scrollable views work in the application
const App = () => (
  <View style={{ flex: 1}}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//render it to the device. Only the root component needs to be registered
AppRegistry.registerComponent('albumsProject', () => App);
