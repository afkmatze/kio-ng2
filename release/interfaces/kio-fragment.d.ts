import { KioNode } from './kio-node';
import * as Types from '../types/kio-content';
export interface KioFragment<T extends Types.KioNestedContentType> extends KioNode<T> {
    type: T;
    level?: number;
    children?: KioNode<Types.KioStructureType>[];
    cont?: any[];
}
