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
    // El motivo de que se ejecute la validación un segundo después de que se abre la aplicación es porque en donde se guardan los regitros (AsyncStorage) no carga inmediatamente se abre la aplicación sino un tiempo después.
    setTimeout(() => {
      if(storage.validate_value() && storage.get_logged()){
        view.replace('home');
        return;
      }
      view.replace('language');
    }, 1000)
  }
}

module.exports = LoadingModel;
