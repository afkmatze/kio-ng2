import { KioNodeModel } from './kio-node'
import { KioContent, KioFragment, KioContentData } from '../interfaces'
import * as Types from '../types/kio-content'

export class KioContentModel<T extends Types.KioPrimitiveContentType> extends KioNodeModel<T> {

  type:T

  constructor ( type:T, props:KioContent<T>, parent?:KioFragment<Types.KioNestedContentType> ) {

    super(type,props,parent)
    
  }

  get isLoaded () {
    return this._data !== undefined
  }

  private _data : KioContentData<T>

  get data(){
    return this._data
  }

  set data ( $data:KioContentData<T> ) {
    this._data = $data
  }

  toObject():KioContent<T> {
    return Object.assign ( {} , super.toObject() , {data: this._data} )
  }
}
