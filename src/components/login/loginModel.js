'use strict'

import React, { Component } from 'react';

let storage = require('../../commons/class/storage');

var view;

var self;

class LoginModel {

  constructor(_view) {
    view = _view;
    self = this;
    view.state = {
      username: '',
      password: '',
      password2: '',
      login: true,
    }
  }

  login(){
    console.log('Iniciar sesión...');
    let username = storage.get_username();
    let password = storage.get_password();
    if(view.state.username != username || view.state.password != password){
      console.log("Usuario o contraseña incorrectos");
      view.refs.username.shake();
      view.refs.password.shake();
      return;
    }
    view.replace('home');
  }

  register(){
    storage.store_data({username: view.state.username, password: view.state.password});
    self.changeForm();
  }

  changeForm(){
    view.setState({
      login: !view.state.login,
      username: '',
      password: '',
      password2: '',
    })
  }
}

module.exports = LoginModel;
