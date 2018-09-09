'use strict'

import React, { Component } from 'react';

var view;
var model;

class LoginController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
  }

  login() {
    if (view.state.userName == "") {
      console.log('Por favor ingrese el usuario');
      return;
    }
    if (view.state.password == "") {
      console.log('Por favor ingrese la contraseña');
      return;
    }
  }

}

module.exports = LoginController;
