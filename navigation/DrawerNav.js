import React from 'react';
import {
  createDrawerNavigator,
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

export default createDrawerNavigator({
  Home: HomeScreen,
})