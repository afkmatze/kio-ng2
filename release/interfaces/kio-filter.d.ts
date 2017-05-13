import { KioNode } from './kio-node';
import { KioFragment } from './kio-fragment';
import * as Types from '../types/kio-content';
export interface KioNodeFilter<T extends Types.KioChildContentType, P extends Types.KioNestedContentType> {
    (node: KioNode<T>, idx?: number, context?: KioFragment<P>): boolean;
}
