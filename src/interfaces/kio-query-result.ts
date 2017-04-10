import { KioQuery } from './kio-query'

export interface KioQueryResult {
  success:boolean;
  error:Error|null;
  query:KioQuery;
  data:any;
}
