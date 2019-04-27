import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import MatchScreen from '../screens/MatchScreen';

export default createStackNavigator({
  Home: HomeScreen,
  Match: MatchScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
})