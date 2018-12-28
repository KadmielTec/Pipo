'use strict'

import React, { Component } from 'react';

var view;
var model;

class QuestionController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
  }

  validateAnswer(selectedOption){
    model.validateAnswer(selectedOption);
  }

}

module.exports = QuestionController;
