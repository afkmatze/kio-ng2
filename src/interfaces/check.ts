import { KioContent } from './kio-content'
import { KioFragment  } from './kio-fragment'
import { KioNode } from './kio-node'
import { KioPublication } from './kio-publication'
import { KioQuery } from './kio-query'
import { 
  KioCtnSrc, KioCtnTxt, KioCtnFragment,
  KioStructureType, KioNestedContentType, KioPrimitiveContentType,
  isCtnFragment, isCtnPublication, isCtnSrc, isCtnTxt, 
  isStructureContentType, isNestedContentType, isPrimitiveContentType
} from '../types'
import { KioNodeType } from '../enums'

export const implementsKioNode = <T extends KioStructureType> ( other:any ):other is KioNode<T> => {
  return (
      'cuid' in other && typeof other.cuid === 'string'
      && 'type' in other && isStructureContentType(other.type)
      && 'locale' in other && typeof other.locale === 'string'
      && 'modifiers' in other && Array.isArray(other.modifiers)
    )
}

export const implementsKioFragment = <T extends KioNestedContentType> ( other:any ):other is KioFragment<T> => {
  return (
      'children' in other && Array.isArray(other.children)
      && 'type' in other && isNestedContentType(other.type)
    )
}

export const implementsKioContent = <T extends KioPrimitiveContentType> ( other:any ):other is KioContent<T> => {
  return (
      implementsKioNode(other)
      && isPrimitiveContentType(other.type)
    )
}


export const implementsKioSrc = ( other:any ):other is KioContent<KioCtnSrc> => {
  return (
      implementsKioContent(other)
      && isCtnSrc(other.type)
    )
}

export const implementsKioTxt = ( other:any ):other is KioContent<KioCtnTxt> => {
  return (
      implementsKioContent(other)
      && isCtnTxt(other.type)
    )
}


export const implementsKioPublication = ( other:any ):other is KioPublication => {
  return (
      implementsKioFragment(other)
      && isCtnPublication(other.type)
    )
}

