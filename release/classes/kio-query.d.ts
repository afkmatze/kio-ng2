import { KioQuery, KioNode } from '../interfaces';
import * as Types from '../types';
export declare class KioQueryModel implements KioQuery {
    cuid: string;
    locale: string;
    cmd: string;
    role: string;
    headers: boolean;
    params: any;
    static fromNode<T extends Types.KioStructureType, N extends KioNode<T>>(node: N): KioQueryModel;
}
