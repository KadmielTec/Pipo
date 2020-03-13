'use strict'

import React, { Component } from 'react';

var view;
var model;
var selectedLanguage;

class GameModeController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
    selectedLanguage= view.get_params();
    console.log("ctrl gm:" + selectedLanguage.themeLanguage);
  }

  learn(){
    model.learn(selectedLanguage.themeLanguage);
  }

  contraReloj(){
    model.contraReloj();
  }

  freeMode(){
    model.freeMode();
  }

}

module.exports = GameModeController;
