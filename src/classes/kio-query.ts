import { KioQuery, KioContent, KioNode } from '../interfaces'
import * as Types from '../types'
import { KioNodeType } from '../enums'

export class KioQueryModel implements KioQuery {

  cuid:string
  locale:string
  cmd:string
  role:string
  headers:boolean
  params:any

  static fromNode <T extends Types.KioStructureType, N extends KioNode<T>> ( node : N ) : KioQueryModel {
    const query = new KioQueryModel ()
    query.cuid = node.cuid
    query.locale = node.locale
    query.cmd = 'get'
    query.role = KioNodeType[node.type]
    if ( Types.isCtnPublication(node.type) )
    {
      query.headers = true
      query.role = 'pub'
    }
    else if ( Types.isCtnSrc(node.type) )
    {
      const mimeType:string = node.headers.mimeType
      if ( mimeType && mimeType.startsWith ( 'image' ) )
      {
        query.cmd = 'img'
      }
    }
    return query
  }

}