import { KioNode } from './kio-node'
import { KioContentData } from './kio-content-data'
import * as Types from '../types/kio-content'

export interface KioContent<T extends Types.KioPrimitiveContentType> extends KioNode<T> {
  data?:KioContentData<T>
}