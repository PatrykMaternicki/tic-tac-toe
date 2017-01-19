export class Player{
  contructor(){
    this.round;
    this.Image;
    this.namePlayer;
    this.id;
  }
  setNamePlayer(namePlayer){
    this.namePlayer = namePlayer;
  }
  getNamePlayer(){
    return this.namePlayer;
  }
  setImage(imageDOM){
    this.Image = imageDOM;
  }
  getImageSrc(){
    return this.Image.src;
  }
  setRound(round){
    this.round = round;
  }
  getWinRound(){
    console.log(this.round);
    return this.round;
  }
  setId(id){
    this.id = id;
  }
  getId(){
    return this.id;
  }
  increaseWinRounds(){
    this.round++;
  }
}
