'use strict';

let $ = require('jquery');
let songController = require('./song-controller');
let userFactory = require('./user-factory');

// songController.loadSongsToDom();
songController.activateEvents();

$("#auth-btn").click( function() {
  userFactory.logInGoogle()
  .then( (result) => {
    let user = result.user.uid;
    console.log("user", user);
    songController.loadSongsToDom();
  });
});
