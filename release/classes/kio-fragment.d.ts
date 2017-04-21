import { KioContentModel } from './kio-content';
import { KioNode, KioFragment, KioNodeFilter } from '../interfaces';
export declare class KioFragmentModel extends KioContentModel {
    readonly type: string;
    constructor(props: KioFragment);
    private _children;
    readonly children: KioContentModel[];
    filterChildren(predicate: KioNodeFilter): KioNode[];
    find(predicate: KioNodeFilter, maxDepth?: number): KioNode;
    createChildNode(props: KioFragment): KioNode;
    childCount(): number;
    childAt(index: any): KioContentModel;
    addChild(childNode: any): void;
    childIndex(childNode: any): number;
    readonly content: KioContentModel[];
    toObject(): KioFragment;
}
