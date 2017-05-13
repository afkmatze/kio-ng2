import { KioNode, KioNodeHeaders, KioFragment, KioQuery } from '../interfaces'
import * as Types from '../types/kio-content'
import { KioNodeType } from '../enums'

const RX_SLUG_MOD : RegExp = new RegExp (/^slug\-/)

export class KioNodeModel<T extends KioNodeType> implements KioNode<T> {

  constructor ( type:T, props:KioNode<T> , parent?:KioFragment<Types.KioNestedContentType> ) {
    this._type = type
    this._cuid = props.cuid
    this._locale = props.locale
    this._modifiers = props.modifiers || []
    this._headers = props.headers || {}
    this._parent = parent
  } 

  private  _type:T
  get type():T {
    return this._type
  }

  get typeName():string {
    return KioNodeType[<number>this.type]
  }

  private _cuid : string
  private _locale : string
  private _modifiers : string[]
  private _parent : KioFragment<Types.KioNestedContentType>
  private _headers : KioNodeHeaders;

  get cuid():string {
    return this._cuid
  }

  get locale () {
    return this._locale || 'en_US'
  }

  get modifiers () {
    return this._modifiers.slice()
  }

  hasModifier ( modifier:string ) {
    return this._modifiers.indexOf ( modifier ) > -1
  }

  get parent ():KioFragment<Types.KioNestedContentType> {
    return this._parent
  }

  set parent ( parentNode : KioFragment<Types.KioNestedContentType> ) {
    this._parent = parentNode || null
  }

  get headers () : KioNodeHeaders {
    return this._headers
  }

  header ( headerKey:string ) {
    return (this._headers||{}) [ headerKey ] || null
  }

  get level () : number {
    return this.parent ? this.parent.level + 1 : 0
  }

  get index () : number {
    if ( !this.parent )
    {
      return -1
    }
    const parentFragment = this.parent
    return parentFragment.childIndex ( this )
  }

  // KioNavigationItem
  get slug() : string {
    const slugMod = this.modifiers.find( mod => RX_SLUG_MOD.test ( mod ) )
    return slugMod && slugMod.replace ( RX_SLUG_MOD , '' )
  }

  get contentQuery () : KioQuery {
    return {
      cuid: this.cuid ,
      locale: this.locale ,
      role: this.typeName ,
      cmd: 'get'
    }
  }

  get pathToRoot():KioNode<Types.KioStructureType>[] {
    const path:KioNode<Types.KioStructureType>[] = []
    return this.parent ? this.parent.pathToRoot.concat(this) : [this]
  }

  toObject():KioNode<Types.KioStructureType>{
    return {
      type: this._type,
      cuid: this._cuid,
      headers: this.headers ,
      locale: this._locale,
      modifiers: this.modifiers
    }
  }
}
