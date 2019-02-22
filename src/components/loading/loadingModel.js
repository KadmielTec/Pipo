'use strict'

import React, { Component } from 'react';
import { Toast } from "native-base";

let storage = require('../../commons/class/storage');

var view;
var self;

class LoadingModel {

  constructor(_view) {
    view = _view;
    self = this;
  }

  redirect(){
    setTimeout(() => {
      if(storage.validate_value() && storage.get_logged()){
        view.replace('home');
        return;
      }
      view.replace('login');
    }, 1000)
  }
}

module.exports = LoadingModel;
