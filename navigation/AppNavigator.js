import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import DrawerNav from './DrawerNav';
import LoadAuthScreen from '../screens/LoadAuthScreen';
import AuthenticationStack from './AuthenticationStack';

export default createAppContainer(createSwitchNavigator({
  AuthLoad: LoadAuthScreen,
  Authentication: AuthenticationStack,
  Main: DrawerNav,
}, {
  initialRouteName: 'AuthLoad',
}))