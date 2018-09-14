'use strict'

import React, { Component } from 'react';
import {createStackNavigator, createBottomTabNavigator, NavigationActions} from 'react-navigation';

import LoginView from './login/loginView';

let Navigator = createStackNavigator({
  login: {
    screen: LoginView,
  },
},
{
  initialRouteName: 'login'
  ,navigationOptions: { gesturesEnabled: false }
  ,transitionConfig: () => ({ screenInterpolator: () => null })
});

module.exports = { Navigator };
