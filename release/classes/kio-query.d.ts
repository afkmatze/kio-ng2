import { KioQuery, KioNode } from '../interfaces';
export declare class KioQueryModel implements KioQuery {
    cuid: string;
    locale: string;
    cmd: string;
    role: string;
    headers: boolean;
    params: any;
    static fromNode(node: KioNode): KioQueryModel;
}
