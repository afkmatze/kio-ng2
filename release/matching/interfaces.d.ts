import { KioContentType } from '../types/kio-content';
export interface ComponentFixture {
    type: KioContentType;
    modifiers: string[];
    childTypes?: string[];
}
export interface MatchingQuery {
    [key: string]: any;
}
