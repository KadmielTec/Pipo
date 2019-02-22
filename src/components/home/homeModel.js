'use strict'

import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';

let storage = require('../../commons/class/storage');

var view;
var self;

class HomeModel {
  constructor(_view) {
    view = _view;
    let user = storage.get_username()
    view.state = {
      user: user
    }
  }

  play(){
    view.redirect('theme');
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

}

module.exports = HomeModel;
