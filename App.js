/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

//首页模块
import { Home , CityMenu } from './Home';

export default class App extends Component {
  render() {
    return (
      <ModalStack />
    );
  }
}
class Test extends Component {

  static navigationOptions = {
    title: 'Test',
    header: {
      visible: true,
      title: '菜单',
      right: 'right'
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>点击跳转Test</Text>
        <Button
          onPress={() => navigate('Home')}
          title="点击跳转Test"
        />
      </View>
    );
  }
}

//StackNavigator
const ModalStack = StackNavigator({

  Home: {
    screen: Home
  },
  CityMenu: {
    screen: CityMenu
  },
  Test: {
    screen: Test
  }
});
