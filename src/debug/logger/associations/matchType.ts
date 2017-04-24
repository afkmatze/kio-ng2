import { KioContentModel, KioPublicationModel, KioQueryModel, KioNodeModel, KioFragmentModel } from '../../../classes'
import { AssociationTypes } from './association-types.enum'

export interface AssociationTypeMatcher {
  type:AssociationTypes
  match(value:any):boolean
}


export interface AssociationTypeMatchers {
  [key:number]: AssociationTypeMatcher;
}

export const AssociationTypeNames = [
  AssociationTypes[AssociationTypes.component],
  AssociationTypes[AssociationTypes.cuid],
  AssociationTypes[AssociationTypes.error],
  AssociationTypes[AssociationTypes.fragment],
  AssociationTypes[AssociationTypes.node],
  AssociationTypes[AssociationTypes.query],
  AssociationTypes[AssociationTypes.src],
  AssociationTypes[AssociationTypes.txt]
]
export const AssociationTypeValues = [
  AssociationTypes.component,
  AssociationTypes.cuid,
  AssociationTypes.error,
  AssociationTypes.fragment,
  AssociationTypes.node,
  AssociationTypes.query,
  AssociationTypes.src,
  AssociationTypes.txt
]

const associationTypeByName = ( name:string ):AssociationTypes => {
  switch (name) {
    case AssociationTypes[AssociationTypes.component]:
      return AssociationTypes.component

    case AssociationTypes[AssociationTypes.cuid]:
      return AssociationTypes.cuid
      
   case AssociationTypes[AssociationTypes.error]:
      return AssociationTypes.error
      
   case AssociationTypes[AssociationTypes.fragment]:
      return AssociationTypes.fragment
      
   case AssociationTypes[AssociationTypes.node]:
      return AssociationTypes.node
      
   case AssociationTypes[AssociationTypes.query]:
      return AssociationTypes.query
      
   case AssociationTypes[AssociationTypes.src]:
      return AssociationTypes.src
      
   case AssociationTypes[AssociationTypes.txt]:
      return AssociationTypes.txt
      
  }
  return undefined
} 

const associationTypeName = ( typeValue:number|string ) => {
  if ( 'string' === typeof typeValue )
    return associationTypeName( associationTypeByName(typeValue) )
  return AssociationTypes[typeValue]
}

export const matchers:AssociationTypeMatchers = {
  [AssociationTypes.component]: {
    type: AssociationTypes.component,
    match: ( value:any ) => {
      if (!value.constructor)
        return false
      if ( 'string' === typeof value.constructor.name )
      {
        return value.constructor.name.includes('Component')
      }
      return false
    }
  },
  [AssociationTypes.cuid]: {
    type: AssociationTypes.cuid,
    match: ( value:any ) => {
      if ( typeof value !== 'string' )
        return false
      return value.length === 25
    }
  },
  [AssociationTypes.error]: {
    type: AssociationTypes.error,
    match: ( value:any ) => {
      return value instanceof Error
    }
  },
  [AssociationTypes.fragment]: {
    type: AssociationTypes.fragment,
    match: ( value:any ) => {
      return value instanceof KioFragmentModel
    }
  },
  [AssociationTypes.node]: {
    type: AssociationTypes.node,
    match: ( value:any ) => {
      return value instanceof KioNodeModel
    }
  },
  [AssociationTypes.query]: {
    type: AssociationTypes.query,
    match: ( value:any ) => {
      return value instanceof KioQueryModel
    }
  },
  [AssociationTypes.src]: {
    type: AssociationTypes.src,
    match: ( value:any ) => {
      return value instanceof KioContentModel && value.type === 'src'
    }
  },
  [AssociationTypes.txt]: {
    type: AssociationTypes.txt,
    match: ( value:any ) => {
      return value instanceof KioContentModel && value.type === 'txt'
    }
  }
}

export const matchType = ( value:any ):AssociationTypes => {
  return AssociationTypeValues.find ( key => {
      const matcher = matchers[key]
      return matcher.match(value)
    } )
}
