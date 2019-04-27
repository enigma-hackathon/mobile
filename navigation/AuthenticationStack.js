import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import AuthenticationMainScreen from '../screens/MainAuthenticationScreen';

export default createStackNavigator({
  AuthMain: AuthenticationMainScreen,
}, {
  initialRouteName: 'AuthMain',
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
})