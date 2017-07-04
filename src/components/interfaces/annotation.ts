import { KioContentType, KioNodeTypeName } from '../../types'

export interface ComponentAnnotation {
  type: KioNodeTypeName
  modifiers: any|any[]
  childTypes?: any|any[]
}

export interface ComponentAnnotationConfig extends ComponentAnnotation {
  name: string
}