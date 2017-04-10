export interface KioContentData {}

export interface KioTxtData extends KioContentData {
  text:string;
  locale:string;
}

export interface KioSrcMetaData {
  mediaType:string;  
}

export interface KioImageMetaData {
  mediaType:string; 
}


export interface KioSrcData extends KioContentData {
  url:URL;
  locale:string;
  meta:KioSrcMetaData
}