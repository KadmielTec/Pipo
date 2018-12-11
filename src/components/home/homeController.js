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

  profile(){
    model.profile();
  }

  aboutUs(){
    model.aboutUs();
  }

  logout(){
    model.logout();
  }

}

module.exports = HomeController;
