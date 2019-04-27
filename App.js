import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import * as firebase from 'firebase';
import firebaseConfig from './config/firebase';
import createStore from './redux/createStore';
import { Provider } from 'react-redux';
import {
  AppLoading,
  Asset,
} from 'expo';

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  state = {
    isReady: false,
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading
        startAsync={this._startAsync}
        onFinish={this._onFinish}
        onError={this._onError}
      />
    }

    return (
      <AppNavigator />
    );
  }

  _startAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/weather.png'),
      ])
    ])
  }

  _onFinish = () => {
    this.setState({ isReady: true });
  }

  _onError = (err) => {
    console.warn(err);
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
