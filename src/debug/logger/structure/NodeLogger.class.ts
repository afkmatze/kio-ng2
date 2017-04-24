import { Logger, ContentLogger } from '../abstract'
import { KioNode } from '../../../interfaces'
import { LoggerAssociation } from '../interfaces'

export class NodeLogger<T> extends Logger<KioNode> {

  constructor(target){
    super(target)
  }

  protected associations:LoggerAssociation[]=[]

  add(association:LoggerAssociation){
    this.associations.push(association)
  }

}