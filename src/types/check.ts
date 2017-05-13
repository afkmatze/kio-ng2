import * as Types from './kio-content'
import { KioNodeType } from '../enums'

export const isCtnPublication = ( other:string|number|KioNodeType ):other is Types.KioCtnPublication => {
  if ( 'string' === typeof other )
  {
    return KioNodeType[other] === KioNodeType.publication
  }
  return KioNodeType.publication === other
}

export const isCtnFragment = ( other:string|number|KioNodeType ):other is Types.KioCtnFragment => {
  if ( 'string' === typeof other )
  {
    return KioNodeType[other] === KioNodeType.fragment
  }
  return KioNodeType.fragment === other
}


export const isCtnSrc = ( other:string|number|KioNodeType ):other is Types.KioCtnSrc => {
  if ( 'string' === typeof other )
  {
    return KioNodeType[other] === KioNodeType.src
  }
  return KioNodeType.src === other
}


export const isCtnTxt = ( other:string|number|KioNodeType ):other is Types.KioCtnTxt => {
  if ( 'string' === typeof other )
  {
    return KioNodeType[other] === KioNodeType.txt
  }
  return KioNodeType.txt === other
}


export const isNestedContentType = ( other:string|number|KioNodeType ): other is Types.KioNestedContentType => {
  return isCtnPublication(other) || isCtnFragment(other)
}

export const isPrimitiveContentType = ( other:string|number|KioNodeType ): other is Types.KioPrimitiveContentType => {
  return isCtnSrc(other) || isCtnTxt(other)
}

export const isChildContentType = ( other:string|number|KioNodeType ): other is Types.KioChildContentType => {
  return isCtnSrc(other) || isCtnTxt(other) || isCtnFragment(other)
}

export const isStructureContentType = ( other:string|number|KioNodeType ): other is Types.KioChildContentType => {
  return isCtnSrc(other) || isCtnTxt(other) || isCtnFragment(other) || isCtnPublication(other)
}