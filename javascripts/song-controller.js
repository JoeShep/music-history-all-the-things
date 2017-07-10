'use strict';

let $ = require('jquery');
let db = require('./song-factory');
let templates = require('./template-builder');
let $container = $('.uiContainer--wrapper');

function loadSongsToDom() {
  db.getSongs()
  .then( (songData) => {
    console.log("songData", songData);
    let songList = templates.makeSongList(songData);
    $container.html(songList);
  });
}

module.exports = {loadSongsToDom};
