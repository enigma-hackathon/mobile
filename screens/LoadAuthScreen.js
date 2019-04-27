import React from 'react';
import {
  View,
} from 'react-native';
import * as firebase from 'firebase';

export default class LoadAuthScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('Main');
      } else {
        this.props.navigation.navigate('Authentication');
      }
    });
  }

  render() {
    return (
      <View>
      </View>
    )
  }
}