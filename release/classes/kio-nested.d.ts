import { KioNodeModel } from './kio-node';
import { KioNode, KioFragment, KioNodeFilter } from '../interfaces';
import * as Types from '../types/kio-content';
import { KioNodeType } from '../enums';
export declare class KioNestedModel<T extends Types.KioNestedContentType> extends KioNodeModel<T> implements KioFragment<T> {
    constructor(props: KioFragment<KioNodeType.publication>);
    constructor(props: KioFragment<KioNodeType.fragment>, parent: KioFragment<Types.KioNestedContentType>);
    private _children;
    readonly children: KioNodeModel<Types.KioChildContentType>[];
    filterChildren<C extends Types.KioChildContentType>(predicate: KioNodeFilter<C, T>): KioNode<C>[];
    find<C extends Types.KioChildContentType>(predicate: KioNodeFilter<C, T>, maxDepth?: number): KioNode<C>;
    childCount(): number;
    childAt(index: any): KioNodeModel<Types.KioChildContentType>;
    addChild(childNode: KioNodeModel<Types.KioChildContentType>): void;
    childIndex(childNode: KioNodeModel<Types.KioChildContentType>): number;
    readonly content: KioNodeModel<Types.KioChildContentType>[];
    toObject(): any;
}
