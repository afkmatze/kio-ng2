import { LoggableContext } from '../interfaces'

export interface ContentLogger<T> {
  getName():string;  
}

export class Logger<T extends LoggableContext> implements ContentLogger<T> {

  constructor(target:T){
    this.target = target
  }

  protected target:T;

  get cuid():string {
    return this.target.cuid
  }


  getName(){
    return this.target.constructor.name
  }

}