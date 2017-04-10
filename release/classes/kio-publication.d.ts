import { KioFragmentModel } from './kio-fragment';
import { KioQuery, KioPublication, KioPublicationHead } from '../interfaces';
export declare class KioPublicationModel extends KioFragmentModel {
    constructor(props: KioPublication);
    readonly head: KioPublicationHead;
    readonly isKioPublication: boolean;
    private _title;
    readonly title: string;
    readonly contentQuery: KioQuery;
    toObject(): any;
}
