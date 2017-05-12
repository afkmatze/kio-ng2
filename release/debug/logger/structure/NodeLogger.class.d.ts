import { Logger } from '../abstract';
import { KioNode } from '../../../interfaces';
import { LoggerAssociation } from '../interfaces';
export declare class NodeLogger<T> extends Logger<KioNode> {
    constructor(target: any);
    protected associations: LoggerAssociation[];
    add(association: LoggerAssociation): void;
}
