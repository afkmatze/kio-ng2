/**
 * @module kio-ng2
 * @namespace Classes
 */

import { KioContentModel } from './kio-content'
import { KioNodeModel } from './kio-node'
import { KioNestedModel } from './kio-nested'
import { 
  KioNode, KioFragment, KioNodeFilter, KioPublication,
  implementsKioFragment, implementsKioContent, implementsKioNode, implementsKioPublication,
  implementsKioSrc, implementsKioTxt
} from '../interfaces'
import * as Types from '../types/kio-content'
import { KioNodeType } from '../enums'

export class KioFragmentModel extends KioNestedModel<KioNodeType.fragment> {

  constructor ( props : KioFragment<KioNodeType.fragment>, parent?:KioFragment<Types.KioNestedContentType> ) {
    super ( props, parent )
  }
}
