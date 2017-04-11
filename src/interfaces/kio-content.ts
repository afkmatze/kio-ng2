import { KioNode } from './kio-node'
import { KioContentData } from './kio-content-data'

export interface KioContent extends KioNode {
  data?:KioContentData|undefined
}