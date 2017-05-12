import { KioContentModel, KioFragmentModel, KioPublicationModel, KioQueryModel } from '../../classes'
import { KioModelType } from '../../types/kio-content'
import { Entry, EntryPayload, LoggerContextClass } from './interfaces'
import { LoggerContext } from './types'

import { PublicationLogger } from './structure/publication/PublicationLogger.class'

import { associate } from './associations'
export interface ErrorArgs {
  [key:string]: any;
}

export interface ContextPredicate {
  ( context:KioModelType, idx?:number, contexts?:LoggerContext[] ):boolean
}

const getRootNode = ( node:KioContentModel|KioFragmentModel ) => {
  if ( !node.parent )
    return node
  return getRootNode ( <KioFragmentModel>node.parent )
}

export class Logger {

  errors:Set<any>=new Set()
  
  contexts:Set<LoggerContext>=new Set()
  contextLogs:WeakMap<LoggerContext,Set<Entry>>=new WeakMap()

  protected getContext(context:LoggerContext){
    if ( !this.contexts.has(context) )
    {
      this.contexts.add(context)
      this.contextLogs.set(context,new Set())
    }
    return this.contextLogs.get(context)
  }

  associate(context,other){
    associate(context,other)    
  }
    

  log ( context:LoggerContext , payload:EntryPayload ) {
    this.getContext(context).add({
      timestamp: Date.now(),
      payload: payload
    })
  }

  logError ( contextClass:any, context:LoggerContext, callerFn:Function, error:any, args:ErrorArgs ) {
    const errorData = {
        error,
        contextClass,
        caller: callerFn,
        ...args
      }
    this.errors.add(errorData)
    this.getContext(context).add({
      timestamp: Date.now(),
      payload: errorData
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