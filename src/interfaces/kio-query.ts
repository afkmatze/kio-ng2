export interface KioQuery {
  cuid:string;
  locale?:string;
  cmd:string;
  role:string;
  params?:any;
  headers?:boolean;
}
