'use strict'

import React, { Component } from 'react';

import { connect_to, version } from '../../settings/config';

class HomeModel {
  constructor(_view) {
    view = _view;
    self = this;
    }
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

module.exports = HomeModel;
