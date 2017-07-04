import { isComponentAnnotation, isNamedAnnotation } from './annotation'
import { ComponentStructure, ComponentFragmentStructure, NamedComponentStructure, NamedComponent, NamedFragmentComponentStructure  } from '../interfaces/component'


export const isComponentStructure = ( other:any ):other is ComponentStructure => {
  return isComponentAnnotation(other)
}

export const isComponentFragmentStructure = ( other:any ):other is ComponentFragmentStructure => {
  return (
      'childTypes' in other
      &&
      other.type === 'fragment'
      && 
      isComponentStructure(other)
    )
}

export const isNamedComponentStructure = ( other:any ):other is NamedComponentStructure => {
  return (
      isNamedAnnotation(other)
      && 
      isComponentStructure(other)
    )
}

export const isNamedFragmentComponentStructure = ( other:any ):other is NamedFragmentComponentStructure => {
  return (
      isNamedAnnotation(other)
      && 
      isComponentFragmentStructure(other)
    )
}


export const isNamedComponent = ( other:any ):other is NamedComponent => {
  return isNamedComponentStructure(other) || isNamedFragmentComponentStructure(other)
}