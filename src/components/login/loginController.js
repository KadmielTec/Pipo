'use strict'

import React, { Component } from 'react';

var view;
var model;

class LoginController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
  }

  login(){
    if (view.state.username == "") {
      console.log('Por favor ingrese el usuario');
      view.refs.username.shake();
      return;
    }
    if (view.state.password == "") {
      console.log('Por favor ingrese la contraseña');
      view.refs.password.shake();
      return;
    }
    model.login();
  }

}

module.exports = LoginController;
