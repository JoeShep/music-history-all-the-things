'use strict';

let $ = require('jquery');
let fbURL = "https://fir-101-6198a.firebaseio.com";

function addIds(songData) {
  var idArr = Object.keys(songData);
  console.log("idArr", idArr);
  idArr.forEach( (key) => {
    songData[key].id = key;
  });
  console.log("songData after ids", songData);
  return songData;
}

module.exports.getSongs = () => {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/songs.json`//<.json is important!
    }).done( (songData) => {
      // console.log("songData", songData );
      let amendedSongData = addIds(songData);
      resolve(amendedSongData);
    });
  });
};

module.exports.getSong = (songId) => {
  return new Promise( (resolve, reject) => {
    $.ajax({
      url: `${fbURL}/songs/${songId}.json`
    }).done( (songData) => {
      resolve(songData);
    });
  });
};

module.exports.addSong = (songFormObj) => {
  return new Promise( (resolve, reject) => {
    $.ajax({
      url: `${fbURL}/songs.json`,
      type: "POST",
      data: JSON.stringify(songFormObj),
      dataType: "json"
    }).done( (songId) => {
      resolve(songId);
    });
  });
};

module.exports.saveEditedSong = (songObj, songId) => {
  return new Promise( (resolve, reject) => {
    $.ajax({
      url: `${fbURL}/songs/${songId}.json`,
      type: "PUT",
      data: JSON.stringify(songObj),
      dataType: "json"
    }).done( (songData) => {
      resolve(songData);
    });
  });
};












