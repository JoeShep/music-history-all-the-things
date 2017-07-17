'use strict';

let $ = require('jquery');
let songController = require('./song-controller');

songController.loadSongsToDom();
songController.activateEvents();
