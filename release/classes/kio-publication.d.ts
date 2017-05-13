import { KioFragmentModel } from './kio-fragment';
import { KioQuery, KioPublication, KioPublicationHead } from '../interfaces';
import { KioNodeType } from '../enums';
export declare class KioPublicationModel extends KioFragmentModel<KioNodeType.publication> {
    constructor(props: KioPublication);
    readonly head: KioPublicationHead;
    readonly isKioPublication: boolean;
    private _title;
    readonly title: string;
    readonly contentQuery: KioQuery;
    toObject(): any;
}
