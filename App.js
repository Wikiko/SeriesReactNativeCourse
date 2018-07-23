import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginPage from './src/pages/LoginPage';


export default createStackNavigator(
  {
    Login: LoginPage
  },
  {
    navigationOptions: {
      title: 'Series',
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 30,
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#6ca2f7'
      }
    }
  }
);