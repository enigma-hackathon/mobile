import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {
  SafeAreaView,
} from 'react-navigation';
import moment from 'moment';
import * as firebase from 'firebase';
import { interests } from '../config/interests';
import { HEROKU_API } from '../constants';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
  })

  constructor(...args) {
    super(...args);
    const user = firebase.auth().currentUser;

    this.state = {
      interests,
      userFirstName: user.displayName.split(' ')[0],
      matchLoading: false,
    }
  }

  _onInterestPress = (i) => {
    let { interests } = this.state;
    interests[i].s = !interests[i].s;

    this.setState({ interests });
  }

  _onConfirmPress = () => {
    this.setState({ matchLoading: true });
    const {
      uid,
    } = firebase.auth().currentUser;
    const data = new FormData();
    data.append('uid', uid);
    data.append('interests', this.state.interests.filter((e) => e.s));

    fetch(HEROKU_API + '/match', {
      method: 'POST',
      body: data,
    }).then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{moment().format('MMMM Do, YYYY')}</Text>
          <View style={{ flexDirection: 'column'}}>
            <Image source={require('../assets/weather.png')} resizeMode="contain" style={styles.weather}/>
            <Text style={{ fontSize: 18, color: '#727272' }}>78℉</Text>
          </View>
        </View>

        <Text style={styles.welcomeText}>Hi there, {this.state.userFirstName}</Text>
        <Text style={styles.titleText}>What are you in the mood for today?</Text>

        <View style={styles.interestsWrapper}>
          {this.state.interests.map((e, i) => (
            <TouchableHighlight key={`interest_${i}`}
              style={styles.interestBtnWrapper}
              onPress={() => this._onInterestPress(i)}
              underlayColor="transparent">
              <View style={[styles.interestBtn, e.s ? { backgroundColor: '#1292F3' }: { backgroundColor: '#CEE4F6' }]}>
                <Text style={styles.interestBtnText}>{e.i}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>

        <TouchableHighlight underlayColor="transparent" onPress={this._onConfirmPress}>
            <View>
              {this.state.matchLoading ? <ActivityIndicator /> : <Text>Go Lokl</Text>}
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
    marginBottom: 25,
  },
  interestsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  interestBtnWrapper: {
    width: '45%',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  interestBtn: {
    width: '100%',
    paddingVertical: 5,
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  interestBtnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
  titleText: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 18,
    color: '#727272',
    marginBottom: 5,
  },
})