export * from './kio-content'
export * from './check'

import * as Types from './kio-content'
import * as check from './kio-content'
import { KioNodeType } from '../enums'

export const nodeTypeByName = ( name:string ):KioNodeType => {
  return KioNodeType[name]
}

export const nodeType = <T extends KioNodeType>( name:string|number|T ):T => {
  if ( 'string' === typeof name )
  {
    return KioNodeType[name]
  }else if ( 'number' === typeof name )
  {
    switch ( name )
    {
      case KioNodeType.publication:
      case KioNodeType.fragment:
      case KioNodeType.src:
      case KioNodeType.txt:
        return KioNodeType[KioNodeType[name]]
    }
  }
}


export const primitiveNodeType = ( name:string|number|KioNodeType ):Types.KioPrimitiveContentType => {
  if ( 'string' === typeof name )
  {
    return primitiveNodeType(KioNodeType[name])
  }
  switch ( name )
  {
    case KioNodeType.src:
      return KioNodeType.src

    case KioNodeType.txt:
      return KioNodeType.txt
  }
}


export const childNodeType = ( name:string|number|KioNodeType ):Types.KioChildContentType => {
  if ( 'string' === typeof name )
  {
    return childNodeType(KioNodeType[name])
  }
  switch ( name )
  {
    case KioNodeType.fragment:
      return KioNodeType.fragment

    case KioNodeType.src:
      return KioNodeType.src

    case KioNodeType.txt:
      return KioNodeType.txt
  } 
}