import React from 'react';
import {
  createDrawerNavigator,
} from 'react-navigation';
import HomeStack from './HomeStack';

export default createDrawerNavigator({
  Home: HomeStack,
})