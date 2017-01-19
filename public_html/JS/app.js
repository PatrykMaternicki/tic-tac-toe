"use strict";
import {Game} from './Game.js';
document.addEventListener('DOMContentLoaded', function () {loadGame();})
function loadGame(){
  var GameMenager = new Game();
  GameMenager.init();
  document.getElementById('startApp').addEventListener('click',
  function(){
  GameMenager.run();
  }
  , 'false')
}
