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
    ListView,
} from 'react-native';


import MyListView from './view/listview';

export default class HelloReactNative extends Component {
    render() {
        return (
            <MyListView/>
        );
    }
}

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
