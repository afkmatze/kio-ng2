import { KioContentModel, KioFragmentModel, KioPublicationModel } from '../classes';
import { KioNodeType } from '../enums';
export declare type KioCtnPublication = KioNodeType.publication;
export declare type KioCtnFragment = KioNodeType.fragment;
export declare type KioCtnTxt = KioNodeType.txt;
export declare type KioCtnSrc = KioNodeType.src;
export declare type KioNestedContentType = KioCtnFragment | KioCtnPublication;
export declare type KioChildContentType = KioCtnSrc | KioCtnTxt | KioCtnFragment;
export declare type KioPrimitiveContentType = KioCtnSrc | KioCtnTxt;
export declare type KioStructureType = KioNestedContentType | KioPrimitiveContentType;
export declare type KioContentType = KioCtnPublication | KioCtnFragment | KioCtnTxt | KioCtnSrc;
export declare type KioQueryableContentType = KioCtnPublication | KioCtnTxt | KioCtnSrc;
export declare type KioModelType = KioContentModel<KioPrimitiveContentType> | KioFragmentModel | KioPublicationModel;
