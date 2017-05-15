export * from './kio-content';
export * from './check';
import * as Types from './kio-content';
import { KioNodeType } from '../enums';
export declare const nodeTypeByName: (name: string) => KioNodeType;
export declare const nodeType: <T extends KioNodeType>(name: string | number | T) => T;
export declare const primitiveNodeType: (name: string | number | KioNodeType) => Types.KioPrimitiveContentType;
export declare const childNodeType: (name: string | number | KioNodeType) => Types.KioChildContentType;
