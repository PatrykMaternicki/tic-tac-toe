export class GameControler{
    constructor(){
        this.player1;
        this.player2;
        this.winnerPlayr;
        this.currentPlayGame;
        this.nowTurn = 0;
        this.isRoundIsEnd = false;
        
    }
    
    setPlayers(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }
    
    whoPlayFirst(){
       var roundNumber =  Math.round(Math.random()*1);
       if (roundNumber == 0 ){
           this.currentPlayGame = this.player1;
           return roundNumber;
       }
       else {
           this.currentPlayGame = this.player2;
           return roundNumber;
       }
    }
    changePlayer(){
        if (this.currentPlayGame.getId() == 0){
            this.currentPlayGame = this.player2;
        }
        else if (this.currentPlayGame.getId() == 1){
            this.currentPlayGame =  this.player1;
        }
    }
    
    addWhoGetField(node){
       node.id = this.currentPlayGame.getId();
    }
    
    getCurrentTurn(){
        return this.currentPlayGame;
    }
    increaseTurn(){
        this.nowTurn++;
    }
    getNowTurn(){
       return this.nowTurn;
    }
    isWinner(nodes){
        for (var i =0; i <= 1; i++){
         
           if(this.onLevelIsWin(i,nodes)
             || this.onVerirticalIsWin(i,nodes)
             || this.onDiagonalyLeftIsWin(i,nodes)
             || this.onDiagonalyRightIsWin(i,nodes)){
             this.setWhoIsWinner(i);
             console.log(this.winnerPlayer);
             this.isRoundIsEnd = true;
             return true;
            }
        }
    }
    onLevelIsWin(i,nodes){
        var n=0;
        for (var c=0; c <= 2; c++){
            console.log(c);
            console.log("Now " + n)
            if (nodes[n].id == i
                    && nodes[n+1].id == i
                    && nodes[n+2].id == i
                    && nodes[n].id != ""
                    && nodes[n+1].id != ""
                    && nodes[n+2].id != ""
                    ){
                        
                        return true;
                       
                }
             n = n + 3;
        }
    }
    onVerirticalIsWin(i,nodes){
        var n=0;
            for (var c=0; c <=2; c++){
            if (nodes[n].id == i
                    && nodes[n+3].id == i
                    && nodes[n+6].id == i
                    && nodes[n].id != ""
                    && nodes[n+3].id != ""
                    && nodes[n+6].id != ""
                    ){
                        return true;
                    }
                n++;
        }
    }
    onDiagonalyLeftIsWin(i,nodes){
        if (    nodes[0].id == i
                && nodes[4].id == i
                && nodes[8].id == i
                && nodes[0].id != ""
                && nodes[4].id != ""
                && nodes[8].id != ""
                ){
                    return true;
                }
            
    }
    onDiagonalyRightIsWin(i,nodes){
                if (nodes[2].id == i
                && nodes[4].id == i
                && nodes[6].id == i
                && nodes[2].id != ""
                && nodes[4].id != ""
                && nodes[6].id != ""
                ){
                return true;
                }
    }
    setWhoIsWinner(i){
        if (this.player1.getId() == i){
            this.winnerPlayer = this.player1;
            return;
        }
        else if (this.player2.getId() == i){
            this.winnerPlayer = this.player2;
            return;
        }
    }
    roundIsEnd(){
        return this.isRoundIsEnd;
    }
    getWinnerPlayer(){
        return this.winnerPlayer;
    }
    setRoundIsEnd(stateGame){
        this.isRoundIsEnd = stateGame;
    }
    resetRound(){
        this.nowTurn = 0;
    }
    weGetWinnerGame(player1WinRound, player2WinRound, maxRound){
        if (player1WinRound == maxRound || player2WinRound == maxRound){
            return true;
        }
        return false;
    }
    
}

