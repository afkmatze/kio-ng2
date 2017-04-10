import { KioNode, KioNodeHeaders, KioFragment, KioQuery } from '../interfaces';
export declare class KioNodeModel implements KioNode {
    isKioNode: boolean;
    constructor(props: any, parent?: KioFragment);
    private _type;
    private _cuid;
    private _locale;
    private _modifiers;
    private _parent;
    private _headers;
    readonly type: string;
    readonly cuid: string;
    readonly locale: string;
    readonly modifiers: string[];
    hasModifier(modifier: string): boolean;
    parent: KioFragment;
    readonly headers: KioNodeHeaders;
    header(headerKey: string): any;
    readonly level: number;
    readonly index: number;
    readonly slug: string;
    readonly contentQuery: KioQuery;
    toObject(): KioNode;
}
