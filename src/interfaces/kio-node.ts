import { KioContentType } from '../types/kio-content'
import * as Types from '../types/kio-content'

export interface KioNodeHeaders {
  [key:string]: any;
}

export interface KioNode<T extends Types.KioStructureType> {
  cuid : string;
  type?: KioContentType;
  locale? : string;
  modifiers? : string[];
  parent? : KioNode<Types.KioNestedContentType>;
  index? : number;
  isKioNode? : boolean;
  headers?:KioNodeHeaders;
  pathToRoot?:KioNode<Types.KioStructureType>[];
}
