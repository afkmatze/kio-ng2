import { KioContentType } from '../types/kio-content'

export interface KioNodeHeaders {
  [key:string]: any;
}

export interface KioNode {
  cuid : string;
  type?: KioContentType;
  locale? : string;
  modifiers? : string[];
  parent? : KioNode;
  index? : number;
  isKioNode? : boolean;
  headers?:KioNodeHeaders;
}
