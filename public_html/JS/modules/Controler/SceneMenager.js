import {Scene} from '../Model/Scene.js';
export class SceneMenager{
  constructor(){
    this.scene = new Scene();
    this.hook;
  }
    remove (){
      this.deleteScene();
    }

    addHook(hook){
      this.hook = hook;
    }
    addHookRemove(parentElement, childElement){
      this.scene.setReferenceElement(parentElement);
      this.scene.setChildElement(childElement);
    }
    deleteScene(){
    let parentElement = this.scene.getReferenceElement();
    let childElement = this.scene.getChildElement();
    console.log(childElement);
    parentElement.removeChild(childElement);
    }
    addGameScene(assets,player1,player2,round){
      console.log('Your ID?' + player2.getId())
      this.hook.style.width="100%";
      this.addScene(assets[0]);
      this.setPlayerToScene(player1);
      this.setPlayerToScene(player2);
      this.setRoundsToScene(round);

    }
    addScene(asset){
      console.log(asset);
      this.hook.innerHTML = this.hook.innerHTML + asset;
    }
    setPlayerToScene(objectPlayer){
      console.log(objectPlayer.getId());
      if (objectPlayer.getId() == 0){
          var imagePlayer = new Image(100,100);
          imagePlayer.src= objectPlayer.getImageSrc();
          document.getElementById('imagePlayer').appendChild(imagePlayer);
          document.getElementById('player1').innerHTML ="<p class='infoTextPlayer'>Player 1</p>" + objectPlayer.getNamePlayer();
          document.getElementById('winRounds').innerHTML = "<p class='infoWinRounds'>Win Round<br><br></p>" + objectPlayer.getWinRound();
        }
      else if (objectPlayer.getId() == 1) {
        console.log('RUN?');
        console.log(objectPlayer);
        var imagePlayer = new Image(100,100);
        imagePlayer.src= objectPlayer.getImageSrc();
        document.getElementById('imagePlayer2').appendChild(imagePlayer);
        document.getElementById('player2').innerHTML ="<p class='infoTextPlayer'>Player 2</p>" + objectPlayer.getNamePlayer();
        document.getElementById('winRounds2').innerHTML = "<p class='infoWinRounds'>Win Round<br><br></p>" + objectPlayer.getWinRound();
      }
    }
    setRoundsToScene(round){
      document.getElementById('roundNow').innerHTML ="<p class='infoTextPlayer'>Round</p>" + round;
    }
    setWhoTurn(number,player1,player2){
        var imagePlayer = new Image(100,100);
        if (number == 0){
            imagePlayer.src = player1.getImageSrc();
            document.getElementById('whoTurn').innerHTML = "<p id='whoTurnNamePlayer' class ='infoTextPlayer'>Now Turn</p>" + player1.getNamePlayer();
            document.getElementById('whoTurn').insertBefore(imagePlayer,document.getElementById('whoTurnNamePlayer') )
     
        }
        else{
            imagePlayer.src = player2.getImageSrc();
            document.getElementById('whoTurn').innerHTML = "<p id='whoTurnNamePlayer' class ='infoTextPlayer'>Now Turn</p>" + player2.getNamePlayer();
            document.getElementById('whoTurn').insertBefore(imagePlayer,document.getElementById('whoTurnNamePlayer') )

        }
    }
    
    setImageToFieldScene(objectPlayer){
        imagePlayer = new Image(150,150);
        imagePlayer.src = objectPlayer.getImageSrc();
        imagePlayer.classList.add("fieldImage");
        this.hook.appendChild(imagePlayer);
    }
   
   renderElementWhoNowPlay(objectPlayer){
       this.hook.innerHTML = "<p id='whoTurnNamePlayer' class ='infoTextPlayer'>Now Turn</p>" + objectPlayer.getNamePlayer();
       var imagePlayer = new Image(100,100);
       imagePlayer.src = objectPlayer.getImageSrc();
       this.hook.insertBefore(imagePlayer,document.getElementById('whoTurnNamePlayer') )

   }
   addToSceneWhoWin(player){
      document.getElementById('frame').classList.add("frameWin");
      document.getElementById('frame').innerHTML = "Winner  <br><br>" + player.getNamePlayer();
   }
   removeSceneWhoWin(){
       document.getElementById('frame').classList.remove("frameWin");
       document.getElementById("frame").innerHTML ="";
   }
   renderElementsGame(winnerPlayer, player1, player2,round){
       if (winnerPlayer.getId() == player1.getId()){
           document.getElementById("winRounds").innerHTML="<p class='infoWinRounds'>Win Round<br><br></p>" + winnerPlayer.getWinRound();
       }
       else{
           document.getElementById("winRounds2").innerHTML = "<p class='infoWinRounds'>Win Round<br><br></p>" + winnerPlayer.getWinRound();
       }
       this.setRoundsToScene(round);
   }
   addToSceneTie(){
      document.getElementById('frame').classList.add("frameWin");
      document.getElementById('frame').innerHTML = "tie";
   }
   clearField(nodes){
     nodes.forEach(
             (node) => {
                        if (node.firstElementChild  != null){
                            node.id ="";
                            this.scene.setReferenceElement(node);
                            this.scene.setChildElement(node.firstElementChild);
                            this.deleteScene();
                        }
                    
                       }
                );
   }
}
