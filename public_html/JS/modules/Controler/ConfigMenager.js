import {Player} from '../Model/Player.js';
export class ConfigMenager {

  constructor(){
    this.player1;
    this.player2;
    this.assets = new Array();
    this.nowRound;
    this.maxRound;
    this.rdyConfig = false;
  }
  run(){
    this.setConfig();
    this.buildObjectPlayer();
    this.rdyConfig = true;
    this.nowRound = 1;
    console.log(this.nowRound);
    console.log(this.player1);
    console.log(this.player2);
  }

  setConfig(){
    this.setRound();
  }
  setRound(){
    var OptionsDOM = document.getElementById('roundOptions');
    this.maxRound = OptionsDOM.options[OptionsDOM.selectedIndex].value;
  }
  getNowRound(){
    return this.nowRound;
  }
  
  getMaxRound (){
      return this.maxRound;
  }
  buildObjectPlayer(){
    this.player1 = new Player();
    let namePlayer = document.getElementById('player1').value;
    this.player1.setNamePlayer(namePlayer);
    this.player1.setId(0);
    this.player2 = new Player();
    namePlayer = document.getElementById('player2').value;
    this.player2.setNamePlayer(namePlayer);
    this.player2.setId(1);
    let imagePlayer = new Image();
    imagePlayer.src = './JS/modules/Model/Assests/tac.png';
    this.player1.setImage(imagePlayer);
    let imagePlayer2 = new Image();
    imagePlayer2.src = './JS/modules/Model/Assests/tic.png';
    this.player2.setImage(imagePlayer2);
    this.player1.setRound(0);
    this.player2.setRound(0);
  }
  setAssets(item){
    this.assets = item;
  }
  getAssets(){
    return this.assets;
  }
  getPlayer1(){
    return this.player1;
  }
  getPlayer2(){
    return this.player2;
  }
  increaseWinStreak(objectPlayer){
     if (objectPlayer.getId()==0){
         this.player1.increaseWinRounds();
     }
     else{
         this.player2.increaseWinRounds();
     }
  }
  increaseRounds(){
      this.nowRound++;
  }

}
