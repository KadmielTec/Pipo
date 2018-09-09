'use strict'

import React, { Component } from 'react';

import { connect_to, version } from '../../settings/config';

class LoginModel {

  constructor(_view) {
    view = _view;
    self = this;
    view.state = {
      username: ''
      ,password: ''
    }
  }

  login() {
    console.log('Iniciar sesión...');
  }
}

module.exports = LoginModel;
