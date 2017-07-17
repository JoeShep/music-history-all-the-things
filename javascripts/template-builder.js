'use strict';

let $ = require('jquery');
let songsListTemplate = require('../templates/song-list.hbs');
let formTemplate = require('../templates/form.hbs');

module.exports.makeSongList = (songList) => {
  return songsListTemplate({songs: songList});
};

module.exports.buildSongForm = (song) => {
  let songItem = {
    title: "",
    artist: "",
    year: "",
    album: "",
    btnText: "save song",
    header: "Add New Song",
    btnClass: "save_new_btn"
  };

  let songData = song || songItem;
  return formTemplate(song);
};

