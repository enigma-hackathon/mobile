import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import * as firebase from 'firebase';
import firebaseConfig from './config/firebase';
import createStore from './redux/createStore';
import { Provider } from 'react-redux';

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const store = createStore();

export default class Root extends React.Component {
  render() {
    return (
       <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
