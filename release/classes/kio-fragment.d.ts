import { KioNestedModel } from './kio-nested';
import { KioFragment } from '../interfaces';
import * as Types from '../types/kio-content';
import { KioNodeType } from '../enums';
export declare class KioFragmentModel extends KioNestedModel<KioNodeType.fragment> {
    constructor(props: KioFragment<KioNodeType.fragment>, parent?: KioFragment<Types.KioNestedContentType>);
}
