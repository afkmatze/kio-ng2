
export interface EntryPayload {
  [key:string]: any;
}

export interface Entry {
  timestamp:number;
  payload:EntryPayload
}