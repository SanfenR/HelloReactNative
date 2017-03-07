'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator
} from 'react-native';


export default class MyNavigator extends Component{
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={(route, navigator) => {
                    return <MyScene title={route.title} />
                }}
            />
        )
    }
}