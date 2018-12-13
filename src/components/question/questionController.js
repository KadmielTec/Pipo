'use strict'

import React, { Component } from 'react';

var view;
var model;

class QuestionController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
  }

  Option1(){
    model.Option1();
  }

  Option2(){
    model.Option2();
  }

  Option3(){
    model.Option3();
  }

  Option4(){
    model.Option4();
  }

}

module.exports = QuestionController;