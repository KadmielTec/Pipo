'use strict'

import React, { Component } from 'react';

var view;
var model;

class ThemeController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
  }

  themeSelected(theme){
    model.themeSelected(theme);
  }

}

module.exports = ThemeController;
