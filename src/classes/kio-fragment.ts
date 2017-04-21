import { KioContentModel } from './kio-content'
import { KioNodeModel } from './kio-node'
import { KioNode, KioFragment, KioNodeFilter } from '../interfaces'

export class KioFragmentModel extends KioContentModel {

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

  filterChildren ( predicate:KioNodeFilter ):KioNode[] {
    return this.children.filter ( ( node:KioNode, idx:number ) => predicate ( node, idx, this) )
  }

  find ( predicate:KioNodeFilter, maxDepth:number=-1 ):KioNode {
    for (var i = 0; i < this._children.length; i++) {
      const child = this.childAt(i)
      if ( predicate ( child , i, this ) )
        return child      
    }
    if ( maxDepth !== 0 )
    {
      for (var i = 0; i < this._children.length; i++) {
        const child = this.childAt(i)
        if ( child.type === 'fragment' )
        {
          const found = (<KioFragmentModel>child).find ( predicate, maxDepth-1 )
          if ( found )
          {
            return found
          }
        }
      }        
    }
    return undefined
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
