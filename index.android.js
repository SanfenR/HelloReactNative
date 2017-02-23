/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Greeting extends Component {
  render(){
    return(
      <Text>Hello {this.props.name}</Text>
    );
  }
}

export default class HelloReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name="world"/>
        <Image source={pic.bananas} style={styles.bananas} />
      </View>
    );
  }
}

const pic = {
   bananas: {
     uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
   },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bananas: {
    width: 193,
    height: 130,
  },
});

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
