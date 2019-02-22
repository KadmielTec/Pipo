'use strict'

import React, { Component } from 'react';

var view;
var model;

class LoadingController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
  }

  redirect(){
    model.redirect();
  }

}

module.exports = LoadingController;
