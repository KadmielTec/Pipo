'use strict'

import React, { Component } from 'react';
import { Toast } from "native-base";

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

  loginApi(){
    fetch('https://backendpipo.herokuapp.com/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "usuario": view.state.username,
      "contrasena": view.state.password
    }),
  })
  .then(response => response.json())
  .then(responseJson =>{
    console.log(responseJson.profileData);
    if(view.state.username!=responseJson.profileData.usuario){
      Toast.show({
        text: "Usuario o contraseña incorrecto",
        duration: 4000,
        position: "top",
        type: 'danger',
        textStyle: { textAlign: "center" }
      });
      return;
    }
     Toast.show({
        text: "Bienvenido: " + responseJson.profileData.nombre,
        duration: 3000,
        position: "center",
        type: 'success',
        textStyle: { textAlign: "center" }
      });
    view.replace('home');
  }
  )
  .catch((error) => {
    console.error(error);
  });
  
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
