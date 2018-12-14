'use strict'

import React, { Component } from 'react';

var view;

var self;

class HomeModel {
  constructor(_view) {
    view = _view;
  }

  play(){
    view.redirect('theme');
  }

  profile(){
    console.log('Entrando a modo contraReloj');
  }

  aboutUs(){
    view.redirect('aboutUs');
  }

  logout(){
    view.replace('login');
  }

}

module.exports = HomeModel;
