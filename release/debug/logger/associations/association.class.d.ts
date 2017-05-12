import { AssociationTypes } from './association-types.enum';
export declare const associate: (left: any, right: any) => Association;
export declare class Association {
    constructor(context: any, other: any);
    readonly context: any;
    readonly contextType: AssociationTypes;
    readonly other: any;
    readonly otherType: AssociationTypes;
}
