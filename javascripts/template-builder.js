'use strict';

let $ = require('jquery');
let songsListTemplate = require('../templates/song-list.hbs');

function makeSongList(songList) {
  return songsListTemplate({songs: songList});
}

module.exports = {makeSongList};
