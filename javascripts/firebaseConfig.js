'use strict';

let firebase = require('firebase/app');
let fbData = require("./fb-getter")();

require("firebase/auth");

let config = {
  apiKey: fbData.key,
  authDomain: fbData.authDomain
};

firebase.initializeApp(config);

module.exports = firebase;


