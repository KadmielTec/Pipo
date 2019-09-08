'use strict'

import React, { Component } from 'react';
import { Toast } from "native-base";
var view;
var model;

class LoginController {

  constructor(_view,_model) {
    view = _view;
    model = _model;
  }

  login(){
    if (view.state.username == "") {
      Toast.show({
        text: "Ingrese su usuario",
        duration: 3000,
        position: "top",
        type: 'danger',
        textStyle: { textAlign: "center" }
      });
      return;
    }
    if (view.state.password == "") {
      Toast.show({
        text: "Ingrese la contraseña",
        duration: 3000,
        position: "top",
        type: 'danger',
        textStyle: { textAlign: "center" }
      });
      return;
    }
    model.loginApi();
  }

  register(){
    if(view.state.username == "") {
      Toast.show({
        text: "Ingrese el usuario",
        duration: 3000,
        position: "top",
        type: 'danger',
        textStyle: { textAlign: "center" }
      });
      return;
    }
    if (view.state.password == "") {
      Toast.show({
        text: "Ingrese la contraseña",
        duration: 3000,
        position: "top",
        type: 'danger',
        textStyle: { textAlign: "center" }
      });
      return;
    }
    if (view.state.password2 == "") {
      Toast.show({
        text: "Ingrese nuevamente la contraseña",
        duration: 3000,
        position: "top",
        type: 'danger',
        textStyle: { textAlign: "center" }
      });
      return;
    }
    if(view.state.password !== view.state.password2){
      Toast.show({
        text: "Las contraseñas no coinciden",
        duration: 3000,
        position: "top",
        type: 'danger',
        textStyle: { textAlign: "center" }
      });
      return;
    }
    model.register();
  }

  changeForm(){
    model.changeForm();
  }

  play(){
    view.replace('theme');
  }

}

module.exports = LoginController;
