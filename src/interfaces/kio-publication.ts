import { KioNode } from './kio-node'
import { KioFragment } from './kio-fragment'
import { KioPublicationHead } from './kio-publication-head'
import * as Types from '../types/kio-content'

export interface KioPublication extends KioFragment<Types.KioCtnPublication> {
  title : string;
  head : KioPublicationHead;
  body : KioFragment<Types.KioCtnFragment>[];
}
