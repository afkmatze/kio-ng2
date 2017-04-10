import { KioQuery, KioContent, KioNode } from '../interfaces'

export class KioQueryModel implements KioQuery {

  cuid:string
  locale:string
  cmd:string
  role:string
  headers:boolean
  params:any

  static fromNode ( node : KioNode ) : KioQueryModel {
    const query = new KioQueryModel ()
    query.cuid = node.cuid
    query.locale = node.locale
    query.cmd = 'get'
    query.role = node.type
    if ( node.type === 'pub' )
    {
      query.headers = true  
    }
    else if ( node.type === 'src' )
    {
      const mimeType:string = (<KioContent>node).headers.mimeType
      if ( mimeType && mimeType.startsWith ( 'image' ) )
      {
        query.cmd = 'img'
      }
    }
    return query
  }

}