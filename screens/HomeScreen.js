import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import {
  SafeAreaView,
} from 'react-navigation';
import moment from 'moment';
import * as firebase from 'firebase';
import { interests } from '../config/interests';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
  })

  constructor(...args) {
    super(...args);
    const user = firebase.auth().currentUser;

    this.state = {
      userFirstName: user.displayName.split(' ')[0],
      interests,
    }
  }

  _onInterestPress = (i) => {
    let { interests } = this.state;
    interests[i].s = !interests[i].s;

    this.setState({ interests });
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.titleWrapper}>
          <Text style={styles.date}>{moment().format('MMMM Do, YYYY')}</Text>
          <Image source={require('../assets/weather.png')} resizeMode="contain" style={styles.weather}/>
        </View>

        <Text>Hi there, {this.state.userFirstName}</Text>
        <Text style={styles.titleText}>What are you in the mood for today?</Text>

        <View style={styles.interestsWrapper}>
          {this.state.interests.map((e, i) => (
            <TouchableHighlight key={`interest_${i}`} style={styles.interestBtnWrapper} onPress={() => this._onInterestPress(i)}>
              <View style={styles.interestBtn}>
                <Text style={styles.interestBtnText}>{e.i}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>

        <TouchableHighlight underlayColor="transparent">
            <View>
              <Text>Go Lokl</Text>
            </View>
        </TouchableHighlight>
      </SafeAreaView>
    )
  }
}

const styles= StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
  },
  weather: {
    height: 25,
    width: 25,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  interestsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  interestBtnWrapper: {
    width: '50%',
  },
  interestBtn: {
    width: '100%',
  },
  interestBtnText: {
    textAlign: 'center',
  }
})