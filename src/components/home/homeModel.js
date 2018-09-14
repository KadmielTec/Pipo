'use strict'

import React, { Component } from 'react';

var view;

var self;

class HomeModel {
  constructor(_view) {
    view = _view;
    self = this;
  }

  learn(){
    console.log('Entrando a mode aprende');
  }

  contraReloj(){
    console.log('Entrando a mode contraReloj');
  }

  freeMode(){
    console.log('Entrando a mode Libre');
  }

}

module.exports = HomeModel;
