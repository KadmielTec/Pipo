'use strict'

import React, { Component } from 'react';
import { Toast } from "native-base";
import {inicio} from '../../commons/sounds';

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
    let username = storage.get_username();
    let password = storage.get_password();
    if(view.state.username != username || view.state.password != password){
      Toast.show({
        text: "Usuario o contraseña incorrecto",
        duration: 4000,
        position: "top",
        type: 'danger',
        textStyle: { textAlign: "center" }
      });
      return;
    }
    storage.store_data({logged: true});
    view.replace('home');
    inicio.play();
  }

  register(){
    storage.store_data({username: view.state.username, password: view.state.password});
    Toast.show({
      text: `¡Usuario ${view.state.username} registrado con éxito!` ,
      duration: 4000,
      position: "top",
      type: 'success',
      textStyle: { textAlign: "center" }
    });
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
