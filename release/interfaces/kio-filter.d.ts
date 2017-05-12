import { KioNode } from './kio-node';
import { KioFragment } from './kio-fragment';
export interface KioNodeFilter {
    (node: KioNode, idx?: number, context?: KioFragment): boolean;
}
