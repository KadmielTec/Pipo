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
    console.log('Entrando a modo aprende');
  }

  contraReloj(){
    console.log('Entrando a modo contraReloj');
  }

  freeMode(){
    console.log('Entrando a modo Libre');
  }

}

module.exports = HomeModel;
