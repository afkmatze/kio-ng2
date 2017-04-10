import { KioNode, KioNodeHeaders, KioFragment, KioQuery } from '../interfaces'

const RX_SLUG_MOD : RegExp = new RegExp (/^slug\-/)

export class KioNodeModel implements KioNode {

  get isKioNode () { return true }
  set isKioNode ( b ) { }

  constructor ( props : any , parent? : KioFragment) {
    this._type = props.type || 'pub'
    this._cuid = props.cuid
    this._locale = props.locale
    this._modifiers = props.modifiers || props.mod || []
    this._headers = props.headers || {}
    this._parent = parent
  } 

  private _type : string;
  private _cuid : string
  private _locale : string
  private _modifiers : string[]
  private _parent : KioFragment
  private _headers : KioNodeHeaders;


  get type () {
    return this._type
  }

  get cuid () {
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

  get parent () {
    return this._parent
  }

  set parent ( parentNode : KioFragment ) {
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
    const parentFragment = <KioFragment>this.parent
    return (<any>parentFragment).childIndex ( this )
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
      role: this._type ,
      cmd: 'get'
    }
  }

  toObject():KioNode{
    return {
      type: this._type,
      cuid: this._cuid,
      headers: this.headers ,
      locale: this._locale,
      modifiers: this.modifiers
    }
  }
}
