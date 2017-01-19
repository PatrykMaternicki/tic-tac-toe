export class Scene {
  constructor(){
    this.referenceElement;
    this.childElement;
  }
  setReferenceElement(parentItem){
    this.referenceElement = parentItem;
  }
  getReferenceElement(){
    return this.referenceElement;
  }
  setChildElement (childItem){
    this.childElement = childItem;
  }
  getChildElement()
    {
    return this.childElement;
    }
}
