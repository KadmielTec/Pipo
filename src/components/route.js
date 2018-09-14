'use strict'

import React, { Component } from 'react';
import {createStackNavigator, createBottomTabNavigator, NavigationActions} from 'react-navigation';

import LoginView from './login/loginView';
import HomeView from './home/homeView';

let Navigator = createStackNavigator({
  login: {
    screen: LoginView,
  },
  home: {
    screen: HomeView,
  },
},
{
  initialRouteName: 'login'
  ,navigationOptions: { gesturesEnabled: false }
  ,transitionConfig: () => ({ screenInterpolator: () => null })
});

module.exports = { Navigator };
