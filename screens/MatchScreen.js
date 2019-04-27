import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {
  SafeAreaView,
} from 'react-navigation';
import {
  MapView,
} from 'expo';
const { Marker } = MapView;
import { connect } from 'react-redux';

export default class MatchScreen extends React.Component {
  componentDidMount() {
    console.log(this.props.navigation.getParam('name'));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView style={styles.mapview}
            pitchEnabled={false}
            scrollEnabled={false}
            zoomEnabled={false}
            cacheEnabled={true}
            region={{
              latitude: 25.795022,
              longitude: -80.134539,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >
            <Marker coordinate={{
              latitude: 25.795022,
              longitude: -80.134539,
            }} />
          </MapView>
        <View style={styles.matchContainer}>
            <Text style={{ fontWeight: '600', color: '#333', fontSize: 24}}>Yay, meet your Miami Lokly</Text>
            <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 15, marginTop: 15 }}>
              <Image source={{ uri: this.props.navigation.getParam('picture')}} resizeMode="cover" style={styles.photo}/>
              <Text style={styles.name}>{this.props.navigation.getParam('name')}</Text>
              <View style={styles.ratingWrapper}>
                <Text style={styles.rating}>4.8</Text>
                <Text style={{ fontWeight: '500' }}>67</Text>
              </View>
              <View>
                <Text style={{ fontWeight: '600', color: '#727272' }}>Highly rated for</Text>
                <View style={styles.interestsWrapper}>
                  {this.props.navigation.getParam("interests").map((e,i) => (
                    <View style={styles.interest} key={`interest_${i}`}>
                      <Text style={styles.interestText}>{e}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row'}}>
          <TouchableHighlight style={styles.bottomBtnWrapper}>
            <View style={styles.bottomBtn}>
              <Text style={styles.bottomBtnText}>Call</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomBtnWrapper}>
            <View style={styles.bottomBtn}>
              <Text style={styles.bottomBtnText}>Cancel</Text>
            </View>
          </TouchableHighlight>
        </View>
        </View>
      </SafeAreaView>
    )
  }
}

/* const mapStateToProps = (state) => ({
  match: state.match,
});

export default connect(mapStateToProps, null)(MatchScreen); */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapview: {
    height: '50%',
    width: '100%',
  },
  matchContainer: {
    flex: 1,
    marginTop: -100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    backgroundColor: 'white',
    shadowColor: '#333',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    marginBottom: -50,
    paddingHorizontal: 10,
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rating: {
    backgroundColor: '#F3CD12',
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 28,
    color: '#333',
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 10,
  },
  interestsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  interest: {
    width: '35%',
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1292F3',
    marginVertical: 5,
    marginHorizontal: 2,
  },
  interestText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
  },
  bottomBtnWrapper: {
    flex: 1,
    width: '45%',
    marginHorizontal: 2,
  },
  bottomBtn: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderColor: '#ccc',
  },
  bottomBtnText: {
    color: '#333',
    fontSize: 20,
    fontWeight: '500',
  }
})
