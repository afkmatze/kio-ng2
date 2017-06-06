/**
 * @module kio-ng2
 * @namespace Classes
 */
import { KioNodeModel } from './kio-node';
import { KioContent, KioFragment, KioContentData } from '../interfaces';
import * as Types from '../types/kio-content';
export declare class KioContentModel<T extends Types.KioPrimitiveContentType> extends KioNodeModel<T> {
    type: T;
    constructor(type: T, props: KioContent<T>, parent?: KioFragment<Types.KioNestedContentType>);
    readonly isLoaded: boolean;
    private _data;
    data: KioContentData<T>;
    toObject(): KioContent<T>;
}
