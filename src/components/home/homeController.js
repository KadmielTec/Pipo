'use strict'

import React, { Component } from 'react';

var view;
var model;

class HomeController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
  }

  play(){
    model.play();
  }

  aboutUs(){
    model.aboutUs();
  }

  logout(){
    model.logout();
  }

  reload(){
    model.reload();
  }

}

module.exports = HomeController;
