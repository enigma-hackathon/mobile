import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import {
  SafeAreaView,
} from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
  })

  componentDidMount() {
    this.props.navigation.toggleDrawer();
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <Text>Home</Text>
      </SafeAreaView>
    )
  }
}

const styles= StyleSheet.create({
  main: {
    flex: 1,
  }
})