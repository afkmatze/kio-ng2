import { KioNode } from './kio-node';
import { KioNodeFilter } from './kio-filter';
import * as Types from '../types/kio-content';
export interface KioFragment<T extends Types.KioNestedContentType> extends KioNode<T> {
    type: T;
    level?: number;
    children?: KioNode<Types.KioStructureType>[];
    cont?: any[];
    filterChildren<C extends Types.KioChildContentType>(predicate: KioNodeFilter<C, T>): KioNode<C>[];
    find<C extends Types.KioChildContentType>(predicate: KioNodeFilter<C, T>): KioNode<C>;
    childCount(): number;
    childIndex<T extends Types.KioChildContentType>(childNode: KioNode<T>): number;
    addChild<C extends Types.KioChildContentType>(props: KioNode<C>): void;
    readonly content: KioNode<Types.KioChildContentType>[];
    toObject(): any;
}
