# tic-tac-toe
Popular game tic-tac-toe created Single Page Application Technology.

## Required:
### Client:
 - Node.js
 - PHP
 - Run Only Firefox 50 (Yet...)
 
 If you game doesn't started, please wait a minute. Sometimes is problem parse to DOM and load assets.
### Dev:
- Babel
- Webpack

# Tasks:

## Game.js
 - Core game.
 - Menagment Assets, Controlers, Menagers and game.
 
 ### Methods:
 - init : Start other Menager. Loading assets.
 - run: Start game. Setting players.
 - buildView: build view game.
 - addEventsToField: Add events to interactive elements.
 - startTurn: Setting players who play now.
 - isEmptyField: Is empty field.
 - playAgain: Run event new game.
 - checkAndWhoWin: Check who wing game or is game won.
 
 ## AssetsMenager.js
 - Loading Assets.
 - Storage Assets.
 
 ### Methods:
 - Run: Start uploading assets. Promise to assetsBuilder.
 - getAssets: get Asset.
 - setAssets: set Assets.
 
 ## AssestsBuilder.js
 - Upload Assets.
 
 ### Methods:
 - UploadAssets: Uploads Assets. Connect to server.
 
 ## ConfigMenager.js
 - Set config game.
 - Build Object Player.
 
 ### Methods:
 - run: start Menager.
 - setRound: set how much play round.
 - getNowRound: Which round is play.
 - getMaxRound: Return config - maxRound.
 - buildObjectPlayer : build Players.
 - increaseWinStreak: increase win rounds.
 - increaseRounds: increase rounds.
 
 ## GameControler.js
  - Control game.
  
 ### Methods:
  - setPlayer: who play game.
  - whoPlayFirst: pick who play first.
  - changePlayer: change plaeyer, when after turn is over.
  - addWhoGetField: set to ID to DOM, who get field.
  - getCurrentTurn: which turn now.
  - increaseTurn: increase Turn..
  - isWinner: we had winner.
  - OnLevelIsWin,OnDiagona etc... : check We had winner.
  - setWhoWinner: set Winner player.
  - roundisEnd: return round is over.
  - resetRound: reset turn.
  - weGetWinnerGame: Player who get MaxRound.
  
  ## SceneMenager.js
  - Render,add,delete scene (View game).
  
  ### Methods:
  
  - deleteScene: remove assets to scene.
  - addHook: add hook to add/render assets to scene.
  - addHookRemove : add hook to remove assets to scene.
  - addGameScene: add main scene.
  - setPlayerToScene: set info players.
  - setRoundsToScene: set info round.
  - setWhoTurn: set info who playing now.
  - setImageToField: set Image (tic or tac) to field game.
  - renderElementWhoPlayNow: render info who playing now.
  - addToSceneWhoWin: set info who win.
  - renderElementsGame: render win rounds.
  - addToSceneToTie: set info is tie to scene.
  - clearField: remove checked field.
  
  ## Player.js
 - Player object.
 
 ### Methods:
 - set/get NamePlayer: set/get name player.
 - set/get Round: set/get game round.
 - set/get Image: set/get image player.
 - set/get id: id player.
 
 
 
 
 
