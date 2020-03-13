'use strict'

import React, { Component } from 'react';

var view;
var model;

class ThemeController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
    
  }

  themeSelected(theme,language){
    console.log("theme ctrl: "+theme);
    model.themeSelected(theme,language);
  }

}

module.exports = ThemeController;
