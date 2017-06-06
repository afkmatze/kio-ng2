/**
 * @module kio-ng2
 * @namespace Classes
 */


import { KioNestedModel } from './kio-nested'
import { KioQuery, KioPublication, KioPublicationHead } from '../interfaces'
import { KioCtnPublication } from '../types'
import { KioNodeType } from '../enums'

export class KioPublicationModel extends KioNestedModel<KioNodeType.publication>
{

  constructor ( props : KioPublication ) {
    super ( Object.assign ( {} , props , {
      children: props.body
    } ) )
    this._title = props.title
    this.head = props.head
  }

  readonly head:KioPublicationHead

  get isKioPublication () { return true }

  private _title : string;

  get title () {
    return this._title
  }

  get contentQuery () : KioQuery {
    return {
      cuid: this.cuid ,
      locale: this.locale ,
      role: KioNodeType[KioNodeType.publication] ,
      headers: true ,
      cmd: 'get'
    }
  }
  
  toObject():any {
    return Object.assign ( {} , super.toObject() , {title: this._title, head: this.head} )
  }
}
