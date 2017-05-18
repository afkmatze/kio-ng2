import * as Types from '../types/kio-content'
import { KioOEmbed } from './kio-o-embed'

export interface KioContentData <T extends Types.KioPrimitiveContentType>{
  type:T
}

export interface KioTxtData extends KioContentData<Types.KioCtnTxt> {
  text:string;
  locale:string;
}

export interface KioSrcMetaData {
  mediaType:string;  
}

export interface KioImageMetaData {
  mediaType:string; 
}


export interface KioSrcData extends KioContentData<Types.KioCtnSrc> {
  url:URL;
  locale:string;
  meta:KioSrcMetaData
}

export interface KioEmbedData extends KioSrcData {
  oEmbed: KioOEmbed
}