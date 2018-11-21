import React, { Component } from 'react';

import { AsyncStorage } from 'react-native';

var self;

var storage_data;

class Storage {

  constructor(){
    self = this;
    storage_data = {
      username : ''
      ,password : ''
    };
    self.load_data();
  }

  load_data(){
    try{
      AsyncStorage.getItem('loggedIn')
        .then( data =>{
          if(data === null) return;
          data = JSON.parse(data);
          storage_data = data;
        })
    }catch(err){

    }
  }

  get_username(){
    return storage_data.username;
  }

  get_password(){
    return storage_data.password;
  }

  store_data(_args){
    let defArgs = {username: '', password: ''};
    let args = Object.assign({}, defArgs, _args);

    AsyncStorage.getItem('loggedIn').then(data => AsyncStorage.setItem('loggedIn', JSON.stringify(args)));

    storage_data.username = args.username;
    storage_data.password = args.password;
  }

  validate_value(){
    var redir = true;
    if(storage_data.username == undefined || storage_data.password == undefined){
      redir = false
    }
    return redir;
  }

}

const _storage = new Storage();

module.exports = _storage;
