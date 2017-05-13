import { KioContentModel } from './kio-content'
import { KioNodeModel } from './kio-node'
import { 
  KioNode, KioFragment, KioNodeFilter, KioPublication,
  implementsKioFragment, implementsKioContent, implementsKioNode, implementsKioPublication,
  implementsKioSrc, implementsKioTxt
} from '../interfaces'
import * as Types from '../types/kio-content'
import { KioNodeType } from '../enums'

export class KioFragmentModel<T extends Types.KioNestedContentType> extends KioNodeModel<T> implements KioFragment<T> {

  constructor ( props : KioFragment<KioNodeType.publication> )
  constructor ( props : KioFragment<KioNodeType.fragment>, parent:KioFragment<Types.KioNestedContentType> )
  constructor ( props : KioFragment<T>, parent?:KioFragment<Types.KioNestedContentType> ) {
    super ( props.type, props, parent )

    const childNodes = props.children || props.cont
    if ( Array.isArray ( childNodes ) )
    {
      childNodes.forEach ( childNode => this.addChild ( childNode ) )
    }
/*    if ( implementsKioPublication(props) )
    {
      this._type = KioNodeType.publication
    }
    else {
      this._type = KioNodeType.fragment
    }*/  
  }

  private _children : KioNodeModel<Types.KioChildContentType>[] = []

  get children () {
    return this._children.slice()
  }

  filterChildren <C extends Types.KioChildContentType>( predicate:KioNodeFilter<C,T> ):KioNode<C>[] {
    return this.children.filter ( ( node:KioNode<C>, idx:number ) => predicate ( node, idx, this ) )
  }

  find <C extends Types.KioChildContentType>( predicate:KioNodeFilter<C,T>, maxDepth:number=-1 ):KioNode<C> {
    for (var i = 0; i < this._children.length; i++) {
      const child = this.childAt(i)
      if ( predicate ( child , i, this ) )
        return child
    }
    if ( maxDepth !== 0 )
    {
      for (var i = 0; i < this._children.length; i++) {
        const child = this.childAt(i)
        if ( child instanceof KioFragmentModel )
        {
          const found = child.find ( predicate, maxDepth-1 )
          if ( found )
          {
            return found
          }
        }
      }        
    }
    return undefined
  }

  
  childCount ( ) { return this._children.length }
  childAt ( index ) { return this._children [ index ] }
  addChild ( childNode : KioNodeModel<Types.KioChildContentType> ) {
    childNode.parent = this
    this._children.push ( childNode )
  }

  childIndex ( childNode:KioNodeModel<Types.KioChildContentType> ) {
    return this._children.indexOf ( childNode )
  }

  get content():KioNodeModel<Types.KioChildContentType>[] {
    return this.children
  }

  toObject():any {
    return Object.assign ( {} , super.toObject() , {children: (this._children||[]).map ( child => child.toObject() )} )
  }
}
