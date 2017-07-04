import { ComponentAnnotation } from './annotation';
export interface ComponentStructure extends ComponentAnnotation {
}
export interface ComponentFragmentStructure extends ComponentStructure {
    type: 'fragment';
}
export interface INamedAnnotation {
    name: string;
}
export declare type NamedComponentStructure = INamedAnnotation & ComponentStructure;
export declare type NamedFragmentComponentStructure = INamedAnnotation & ComponentFragmentStructure;
export declare type NamedComponent = NamedComponentStructure | NamedComponentStructure | NamedFragmentComponentStructure;
