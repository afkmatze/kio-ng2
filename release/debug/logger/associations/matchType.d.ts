import { AssociationTypes } from './association-types.enum';
export interface AssociationTypeMatcher {
    type: AssociationTypes;
    match(value: any): boolean;
}
export interface AssociationTypeMatchers {
    [key: number]: AssociationTypeMatcher;
}
export declare const AssociationTypeNames: string[];
export declare const AssociationTypeValues: AssociationTypes[];
export declare const matchers: AssociationTypeMatchers;
export declare const matchType: (value: any) => AssociationTypes;
