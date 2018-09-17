'use strict'

import React, { Component } from 'react';

var view;

var self;

class LoginModel {

  constructor(_view) {
    view = _view;
    self = this;
    view.state = {
      username: ''
      ,password: ''
    }
  }

  login(){
    console.log('Iniciar sesión...');
    view.replace('home');
  }
}

module.exports = LoginModel;
