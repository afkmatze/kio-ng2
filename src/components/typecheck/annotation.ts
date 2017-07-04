import { ComponentAnnotation, ComponentAnnotationConfig } from '../interfaces/annotation'

export const isComponentAnnotation = ( other:any ):other is ComponentAnnotation => {
  return ( 
    'type' in other 
    &&
    'modifiers' in other
  )
}

export const isNamedAnnotation = ( other:any ):other is ComponentAnnotationConfig => {
  return (
      'name' in other
      && 
      isComponentAnnotation(other)
    )
}
