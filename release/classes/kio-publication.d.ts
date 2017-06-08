/**
 * @module kio-ng2
 * @namespace Classes
 */
import { KioNestedModel } from './kio-nested';
import { KioQuery, KioPublication, KioPublicationHead } from '../interfaces';
import { KioNodeType } from '../enums';
export declare class KioPublicationModel extends KioNestedModel<KioNodeType.publication> {
    constructor(props: KioPublication);
    readonly head: KioPublicationHead;
    readonly isKioPublication: boolean;
    private _title;
    readonly title: string;
    readonly contentQuery: KioQuery;
    toObject(): any;
}
