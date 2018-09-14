'use strict'

import React, { Component } from 'react';

var view;
var model;

class HomeController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
  }

  learn(){
    model.learn();
  }

  contraReloj(){
    model.contraReloj();
  }

  freeMode(){
    model.freeMode();
  }

}

module.exports = HomeController;
