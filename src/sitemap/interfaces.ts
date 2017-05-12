export interface KioRouteSlug {
  [key:string]: string
}

export interface KioRoute {
  slug:KioRouteSlug
  cuid:string
  children?:KioRoute[]
}