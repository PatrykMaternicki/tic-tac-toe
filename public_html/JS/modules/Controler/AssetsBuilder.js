export class AssetsBuilder{
  constructor(){
    this.urlList = [
      'JS/modules/Model/Assests/assets_game.php',
      'JS/modules/Model/Assests/assets_congratulationWinner.php'
    ];
  }


  uploadAssets(number){
        var headers = new Headers();
        headers.set('Content-Type', 'text/html');
        headers.set('Method','GET');
        var request = new Request(this.urlList[number], headers);
      return fetch(request).then(function (response){
         return response.text();
      }).then(function(text){
      return text;
      });
  }



  }
