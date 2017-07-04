/**
 * @module kio-ng2-component-routing
 * @namespace Components
 */

import { 
  KioContent, KioFragment, KioNode
} from '../../interfaces'
import { KioNodeType } from '../../enums'
import { KioContentType } from '../../types' 
import { ComponentAnnotation, ComponentAnnotationConfig } from './annotation'

export interface ComponentStructure extends ComponentAnnotation {}

export interface ComponentFragmentStructure extends ComponentStructure {
  type: 'fragment'
}

export interface INamedAnnotation {
  name: string
}

export type NamedComponentStructure = INamedAnnotation & ComponentStructure
export type NamedFragmentComponentStructure = INamedAnnotation & ComponentFragmentStructure

export type NamedComponent = NamedComponentStructure|NamedComponentStructure|NamedFragmentComponentStructure
