import { KioContentModel } from './kio-content'
import { KioNodeModel } from './kio-node'
import { KioNode } from '../interfaces/kio-node'
import { KioFragment } from '../interfaces/kio-fragment'

export class KioFragmentModel extends KioContentModel {

  get isKioFragment () { return true }

  get type ():string {
    return 'fragment'
  }

  constructor ( props : KioFragment ) {
    super ( props )

    const childNodes = props.children || props.cont
    if ( Array.isArray ( childNodes ) )
    {
      childNodes.forEach ( childNode => this.addChild ( childNode ) )
    }
  }

  private _children : KioContentModel[] = []

  get children () {
    return this._children.slice()
  }

  createChildNode ( props : KioFragment ) : KioNode {
    if ( !!props.cont )
    {
      return new KioFragmentModel ( props )
    }
    return new KioContentModel ( props )
  }

  childCount ( ) { return this._children.length }
  childAt ( index ) { return this._children [ index ] }
  addChild ( childNode : any ) {

    if ( !(childNode instanceof KioContentModel) )
    {
      childNode = this.createChildNode ( childNode )
    }

    childNode.parent = this
    this._children.push ( childNode )
  }

  childIndex ( childNode ) {
    return this._children.indexOf ( childNode )
  }

  get content() {
    return this.children
  }

  toObject():KioFragment {
    return Object.assign ( {} , super.toObject() , {children: (this._children||[]).map ( child => child.toObject() )} )
  }
}
