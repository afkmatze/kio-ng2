
export interface ContentLogger<T> {
  getName():string;  
}

export class Logger<T> implements ContentLogger<T> {

  constructor(target:T){
    this.target = target
  }

  protected target:T;


  getName(){
    return this.target.constructor.name
  }

}