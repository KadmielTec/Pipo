'use strict'

import React, { Component } from 'react';
import {createStackNavigator, createBottomTabNavigator, NavigationActions} from 'react-navigation';

import LoadingView from './loading/loadingView';
import LoginView from './login/loginView';
import HomeView from './home/homeView';
import ThemeView from './theme/themeView';
import GameModeView from './gameMode/gameModeView';
import QuestionView from './question/questionView';
import aboutUs from './aboutUs';

// Recordatorio para Jose: Crear un SwitchNavigator entre Login y Home, Home volverlo un StackNavigator.

let Navigator = createStackNavigator({
  loading: {
    screen: LoadingView,
  },
  login: {
    screen: LoginView,
  },
  home: {
    screen: HomeView,
  },
  aboutUs: {
    screen: aboutUs,
  },
  theme: {
    screen: ThemeView,
  },
  gameMode: {
    screen: GameModeView,
  },
  question: {
    screen: QuestionView,
  }
},
{
  initialRouteName: 'loading'
});

module.exports = { Navigator };
