import { LoggableContext } from '../interfaces';
export interface ContentLogger<T> {
    getName(): string;
}
export declare class Logger<T extends LoggableContext> implements ContentLogger<T> {
    constructor(target: T);
    protected target: T;
    readonly cuid: string;
    getName(): string;
}
