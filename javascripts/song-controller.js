'use strict';

let $ = require('jquery');
let db = require('./song-factory');
let templates = require('./template-builder');
let $container = $('.uiContainer--wrapper');

function buildSongObj() {
 let songObj = {
    title: $("#form--title").val(),
    album: $("#form--album").val(),
    artist: $("#form--artist").val(),
    year: $("#form--year").val()
  };
  return songObj;
}

module.exports.loadSongsToDom = () => {
  db.getSongs()
  .then( (songData) => {
    console.log("songData", songData);
    let songList = templates.makeSongList(songData);
    $container.html(songList);
  });
};

module.exports.activateEvents = () => {
  $("#add-song").click(function() {
    console.log("clicked add song");
    let songForm = templates.buildSongForm();
    $container.html(songForm);
  });

  $(document).on("click", ".edit-btn", function() {
    console.log("edit btn clicked");
    let songId = $(this).data("edit-id");
    db.getSong(songId)
    .then( (song) => {
      song.id = songId;
      let editForm = templates.buildSongForm(song);
      $container.html(editForm);
    });
  });

  $(document).on("click", ".save_edit_btn", function() {
    //save edited song;
    console.log("saving edited song");
    let songObj = buildSongObj();
    let songId = $(this).attr("id");
    db.saveEditedSong(songObj, songId)
    .then( (data) => {
      console.log("song updated", data );
      module.exports.loadSongsToDom();
    });
  });

  $(document).on("click", ".save_new_btn", function() {
    console.log("save btn clicked");
    let songObj = buildSongObj();
    db.addSong(songObj)
    .then( (songId) => {
      console.log("song saved", songId);
      module.exports.loadSongsToDom();
    });
  });
};










