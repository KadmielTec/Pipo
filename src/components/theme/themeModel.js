"use strict";

import React, { Component } from "react";

var view;

var self;

var languageSelected;

class ThemeModel {
  constructor(_view) {
    view = _view;
    console.log("theme view: " + view);
    self = this;
    languageSelected = view.get_params();

    let ds = [
      {
        title: "Matematicas",
        theme: 0,
        icon: "math",
        color: "#c0000e",
        language: "es"
      },
      {
        title: "Ciencia",
        theme: 1,
        icon: "science",
        color: "#008bcb",
        language: "es"
      },
      {
        title: "Historia",
        theme: 2,
        icon: "history",
        color: "#4c2f27",
        language: "es"
      },
      {
        title: "Ortografía",
        theme: 3,
        icon: "orthography",
        color: "#008f39",
        language: "es"
      },
      {
        title: "Aleatorio",
        theme: 4,
        icon: "random",
        color: "#000000",
        language: "es"
      },
      {
        title: "Math",
        theme: 0,
        icon: "math",
        color: "#c0000e",
        language: "en"
      },
      {
        title: "Science",
        theme: 1,
        icon: "science",
        color: "#008bcb",
        language: "en"
      },
      {
        title: "History",
        theme: 2,
        icon: "history",
        color: "#4c2f27",
        language: "en"
      },
      {
        title: "Orthography",
        theme: 3,
        icon: "orthography",
        color: "#008f39",
        language: "en"
      },
      {
        title: "Random",
        theme: 4,
        icon: "random",
        color: "#000000",
        language: "en"
      }
    ];

    if (ds.length % 2 != 0) {
      ds.push({ blank: true });
    }

    let dsTheme = [];
    dsTheme = ds.filter(val => {
      return val.language == languageSelected;
    });

    console.log(dsTheme);

    view.state = {
      dataSource: dsTheme
    };
  }

  themeSelected(theme,language) {
    console.log(language)
    view.redirect("gameMode", { theme: theme.theme, themeName: theme.title , themeLanguage: language });
  }
}

module.exports = ThemeModel;
