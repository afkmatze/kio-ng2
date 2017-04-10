import { KioContentModel } from './kio-content';
import { KioNode } from '../interfaces/kio-node';
import { KioFragment } from '../interfaces/kio-fragment';
export declare class KioFragmentModel extends KioContentModel {
    readonly isKioFragment: boolean;
    readonly type: string;
    constructor(props: KioFragment);
    private _children;
    readonly children: KioContentModel[];
    createChildNode(props: KioFragment): KioNode;
    childCount(): number;
    childAt(index: any): KioContentModel;
    addChild(childNode: any): void;
    childIndex(childNode: any): number;
    readonly content: KioContentModel[];
    toObject(): KioFragment;
}
