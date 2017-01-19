import {AssetsBuilder} from './AssetsBuilder.js'
export class AssetsMenager{
  constructor(){
    this.assetsBuilder = new AssetsBuilder();
    this.assets = new Array();
  }
  run (){

    var requestAssets = this.assetsBuilder.uploadAssets(0);
    requestAssets.then(function(assets){
      this.setAssets(assets);
      }.bind(this));

    var requestAssets1 = this.assetsBuilder.uploadAssets(1);
    requestAssets1.then(function(assets){
      this.setAssets(assets);
    }.bind(this));

    


  }
  getAssets(){
    return this.assets;
  }
  setAssets(item){
    this.assets.push(item);
  }
}
