import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {
  SafeAreaView,
} from 'react-navigation';
import {
  Facebook,
} from 'expo';
import * as firebase from 'firebase';
import { HEROKU_API } from '../constants';

export default class AuthenticationMainScreen extends React.Component {
  _onPressFacebookContinue = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync('855437091475253', {
      permissions: ['public_profile', 'email'],
    });

    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase.auth().signInAndRetrieveDataWithCredential(credential)
        .then((resp) => {
          const { user : {
            displayName,
            email,
            photoURL,
            uid,
          }} = resp;
          
          this.setState({
            name: displayName,
            email,
            photoURL,
            uid,
          }, this._lNewUser);
        })
        .catch((err) => console.warn(err));
    }
  }

  _lNewUser = () => {
    const {
      name,
      email,
      photoURL,
      uid,
    } = this.state;
    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('photo', photoURL);
    data.append('uid', uid);

    fetch(HEROKU_API + '/users/new', {
      method: 'POST',
      body: data,
    }).then((resp) => console.log(resp))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome to Lokly</Text>
        <TouchableHighlight underlayColor="transparent" onPress={this._onPressFacebookContinue}>
          <View style={styles.authBtn}>
            <Text style={styles.authBtnText}>Continue with Facebook</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="transparent">
          <View style={styles.authBtn}>
            <Text style={styles.authBtnText}>Sign in</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="transparent">
          <View style={styles.authBtn}>
            <Text style={styles.authBtnText}>Sign up</Text>
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    color: '#333',
  },
  authBtn: {

  },
  authBtnText: {

  },
})