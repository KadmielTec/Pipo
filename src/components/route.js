'use strict'

import React, { Component } from 'react';
import {createStackNavigator, createBottomTabNavigator, NavigationActions} from 'react-navigation';

import LoginView from './login/loginView';
import HomeView from './home/homeView';
import aboutUs from './aboutUs';

let Navigator = createStackNavigator({
  login: {
    screen: LoginView,
  },
  home: {
    screen: HomeView,
  },
  aboutUs: {
    screen: aboutUs,
  }
},
{
  initialRouteName: 'login'
});

module.exports = { Navigator };
