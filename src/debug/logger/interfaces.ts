import { LoggerContext } from './types'

export interface EntryPayload {
  [key:string]: any;
}

export interface LoggableContext {
  cuid:string;
}

export interface Entry {
  timestamp:number;
  payload:EntryPayload
}

export interface LoggerContextClass {
  new ():any
}


export interface LoggerAssociation {
  name:string;
}
