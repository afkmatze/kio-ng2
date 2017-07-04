import { ComponentStructure, ComponentFragmentStructure, NamedComponentStructure, NamedComponent, NamedFragmentComponentStructure } from '../interfaces/component';
export declare const isComponentStructure: (other: any) => other is ComponentStructure;
export declare const isComponentFragmentStructure: (other: any) => other is ComponentFragmentStructure;
export declare const isNamedComponentStructure: (other: any) => other is NamedComponentStructure;
export declare const isNamedFragmentComponentStructure: (other: any) => other is NamedFragmentComponentStructure;
export declare const isNamedComponent: (other: any) => other is NamedComponent;
