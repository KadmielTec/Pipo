'use strict'

import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import { Alert } from 'react-native';
import {inicio, history} from '../../commons/sounds';

let storage = require('../../commons/class/storage');

var view;
var self;


class HomeModel {
  constructor(_view) {
    view = _view;
    let user = storage.get_username();
    let points = storage.get_points();
    view.state = {
      user: user,
      points: points ? points : 0
    }
 
  }

  play(){
    view.redirect('theme');
    inicio.stop();
    history.play();
  }

  aboutUs(){
    view.redirect('aboutUs');
  }

  logout(){
    let action = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'loading'})]
    })
    storage.store_data({logged: false});
    view.dispatch(action);
  }

  reload(){
    let points = storage.get_points();
    view.setState({points: points ? points : 0});
  }

}

module.exports = HomeModel;
