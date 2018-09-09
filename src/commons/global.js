import React, { Component } from 'react';

class global {

  constructor() {
    current_screen = "";
  }

  set_current_screen(newState){
    try{
      var route = newState;
      while (route.index != undefined) {
        route = route.routes[route.index]
      }
      current_screen = route.routeName.toLowerCase();
    }catch(err){}
  }

  get_current_screen() {
    return current_screen;
  }

}

const global_ = new global();

module.exports = global_;
