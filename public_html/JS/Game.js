
import {ConfigMenager} from './modules/Controler/ConfigMenager.js';
import {SceneMenager}  from './modules/Controler/SceneMenager.js';
import {AssetsMenager} from './modules/Controler/AssetsMenager.js';
import {GameControler} from './modules/Controler/GameControler.js';
export class Game {
  constructor (){
    this.configMenager;
    this.sceneMenager;
    this.assetsMenager;
    this.gameControler;
  }
  init(){
    this.configMenager = new ConfigMenager();
    this.sceneMenager = new SceneMenager();
    this.assetsMenager = new AssetsMenager();
    this.gameControler = new GameControler();
    this.assetsMenager.run();
  }
  run (){
    this.configMenager.run();
    this.configMenager.setAssets(this.assetsMenager.getAssets());
    this.sceneMenager.addHookRemove(document.getElementById("app"), document.getElementById("form"));
    this.sceneMenager.remove();
    this.buildView();
    this.gameControler.setPlayers(
                this.configMenager.getPlayer1(),
                this.configMenager.getPlayer2()
                    );
    this.sceneMenager.setWhoTurn(
            this.gameControler.whoPlayFirst(),
            this.configMenager.getPlayer1(),
            this.configMenager.getPlayer2()
                    );
   this.addEventsToFields();
    
  }
  buildView(){
    this.sceneMenager.addHook(document.getElementById("app"));
    this.sceneMenager.addGameScene(
      this.configMenager.getAssets(),
      this.configMenager.getPlayer1(),
      this.configMenager.getPlayer2(),
      this.configMenager.getNowRound()
    );
    

  }
  
  addEventsToFields(){
      var nodesFields = document.querySelectorAll("td");
      nodesFields.forEach(
              (node) => node.addEventListener(
                        'click',
                        () => {
                           
                                if (this.gameControler.roundIsEnd()){
                                    return;
                                }
                                this.startTurn(node);
                                  if (this.gameControler.getNowTurn() >= 4){
                                      if (this.gameControler.getNowTurn() == 9 && !this.gameControler.roundIsEnd()){
                                    this.sceneMenager.addToSceneTie();
                                    window.setTimeout(
                                                        () =>{
                                                            this.sceneMenager.removeSceneWhoWin();
                                                            this.playAgain(document.querySelectorAll("td"));
                                                               },
                                                              2000
                                                        );
                                    return;
                                        }
                                        
                                    if (this.gameControler.isWinner(document.querySelectorAll("td"))){
                                                this.sceneMenager.addToSceneWhoWin(
                                                        this.gameControler.getWinnerPlayer(),
                                                        this.configMenager.getAssets()
                                                        );
                                                this.configMenager.increaseWinStreak(
                                                        this.gameControler.getWinnerPlayer()
                                                        );
                                                this.configMenager.increaseRounds();
                                                if (this.gameControler.weGetWinnerGame(
                                                      this.configMenager.getPlayer1().getWinRound(),
                                                      this.configMenager.getPlayer2().getWinRound(),
                                                      this.configMenager.getMaxRound()
                                                    )
                                                    ){
                                                    this.checkAndAddWhoWin();
                                                    return;
                                                    }
                                                this.sceneMenager.renderElementsGame(
                                                        this.gameControler.getWinnerPlayer(),
                                                        this.configMenager.getPlayer1(),
                                                        this.configMenager.getPlayer2(),
                                                        this.configMenager.getNowRound()
                                                        );
                                                window.setTimeout(
                                                        () =>{
                                                            this.sceneMenager.removeSceneWhoWin();
                                                            this.playAgain(document.querySelectorAll("td"));
                                                               },
                                                              2000
                                                        );
                                                
                                                
                                    }
                                  }
                                     
                            }
                            )
                    );
              
                            }
  startTurn(node){
      if (!this.isEmptyField(node)){
          console.log('OK');
          return;
      }
      this.gameControler.addWhoGetField(node);
      this.sceneMenager.addHook(node);
      this.sceneMenager.setImageToFieldScene(
                this.gameControler.getCurrentTurn()
                );
       this.gameControler.changePlayer();
        this.sceneMenager.addHook(document.getElementById("whoTurn"));
        this.sceneMenager.renderElementWhoNowPlay(
               this.gameControler.getCurrentTurn()
                );
        this.gameControler.increaseTurn();
  }
  
  isEmptyField(node){
     if (node.firstElementChild == null) return true; else return false;
  }
  playAgain(nodes){
     this.sceneMenager.clearField(nodes);
     this.gameControler.resetRound();
     this.gameControler.setRoundIsEnd(false);
  }
 checkAndAddWhoWin(){
     console.log("U here?");
     console.log(this.configMenager.getPlayer1().getWinRound());
     console.log(this.configMenager.getMaxRound());
     if (this.configMenager.getPlayer1().getWinRound() == this.configMenager.getMaxRound()){
         this.sceneMenager.addHookRemove(document.getElementById("app"), document.getElementById("allGame"));
         this.sceneMenager.remove();
     }
     else if (this.configMenager.getPlayer2().getWinRound() == this.configMenager.getMaxRound()){
         this.sceneMenager.addHookRemove(document.getElementById("app"), document.getElementById("allGame"));
         this.sceneMenager.remove();
     }
 }

    
}

