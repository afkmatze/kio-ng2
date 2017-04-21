import { KioContentModel, KioFragmentModel, KioPublicationModel, KioQueryModel } from '../../classes'
import { KioModelType } from '../../types/kio-content'
import { Entry, EntryPayload } from './interfaces'
import { LoggerContext } from './types'

import { PublicationLogger } from './structure/publication/PublicationLogger.class'


export interface ContextPredicate {
  ( context:KioModelType, idx?:number, contexts?:LoggerContext[] ):boolean
}

const getRootNode = ( node:KioContentModel|KioFragmentModel ) => {
  if ( !node.parent )
    return node
  return getRootNode ( <KioFragmentModel>node.parent )
}

export class Logger {

  contexts:Set<LoggerContext>=new Set()
  contextLogs:WeakMap<LoggerContext,Set<Entry>>=new WeakMap()


  log ( context:LoggerContext , payload:EntryPayload ) {
    if ( !this.contexts.has(context) )
    {
      this.contexts.add(context)
      this.contextLogs.set(context,new Set())
    }
    this.contextLogs.get(context).add({
      timestamp: Date.now(),
      payload: payload
    })
  }

  filterContext ( predicate:ContextPredicate ):LoggerContext {
    return Array.from(this.contexts).filter ( predicate )
  }

  filterContextByModifier ( modifier:string ):LoggerContext {
    return this.filterContext ( loggerContext => loggerContext.hasModifier(modifier) )
  }

  findContext ( predicate:ContextPredicate ):LoggerContext {
    return Array.from(this.contexts).find ( predicate )
  }

  contextsOfType ( type ) {
    const contexts:LoggerContext[] = []
    this.contexts.forEach ( context => {
      if ( context instanceof type )
      {
        contexts.push ( context )
      }
    } )
    return contexts
  }

  getPublications(){
    const publications:KioModelType[] = []
    this.contextsOfType(KioContentModel).forEach ( (model:KioContentModel) => {
      const pub = getRootNode(model)
      if ( publications.indexOf(pub) === -1 )
        publications.push(pub)
    } )
    return publications
  }

}