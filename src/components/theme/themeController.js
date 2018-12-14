'use strict'

import React, { Component } from 'react';

var view;
var model;

class ThemeController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
  }

  gameModeSelected(gameMode){
    model.gameModeSelected(gameMode);
  }

}

module.exports = ThemeController;
