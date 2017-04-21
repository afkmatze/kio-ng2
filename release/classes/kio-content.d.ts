import { KioNodeModel } from './kio-node';
import { KioContent } from '../interfaces';
export declare class KioContentModel extends KioNodeModel {
    constructor(data: any, parent?: any);
    readonly isLoaded: boolean;
    private _data;
    data: any;
    toObject(): KioContent;
}
