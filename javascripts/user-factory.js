'use strict';
let firebase = require("./firebaseConfig");
let provider = new firebase.auth.GoogleAuthProvider();

module.exports.logInGoogle = () => {
  console.log("wazzup, auth?");
  return firebase.auth().signInWithPopup(provider);
};
