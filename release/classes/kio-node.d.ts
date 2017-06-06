/**
 * @module kio-ng2
 * @namespace Classes
 */
import { KioNode, KioNodeHeaders, KioFragment, KioQuery } from '../interfaces';
import * as Types from '../types/kio-content';
import { KioNodeType } from '../enums';
export declare class KioNodeModel<T extends KioNodeType> implements KioNode<T> {
    constructor(type: T, props: KioNode<T>, parent?: KioFragment<Types.KioNestedContentType>);
    private _type;
    readonly type: T;
    readonly typeName: string;
    private _cuid;
    private _locale;
    private _modifiers;
    private _parent;
    private _headers;
    readonly cuid: string;
    readonly locale: string;
    readonly modifiers: string[];
    hasModifier(modifier: string): boolean;
    parent: KioFragment<Types.KioNestedContentType>;
    readonly headers: KioNodeHeaders;
    header(headerKey: string): any;
    readonly level: number;
    readonly index: number;
    readonly slug: string;
    readonly contentQuery: KioQuery;
    readonly pathToRoot: KioNode<Types.KioStructureType>[];
    toObject(): KioNode<Types.KioStructureType>;
}
