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

  aboutUs(){
    view.redirect('aboutUs');
  }

  logout(){
    view.pop();
  }

}

module.exports = HomeModel;
