export interface ContentLogger<T> {
    getName(): string;
}
export declare class Logger<T> implements ContentLogger<T> {
    constructor(target: T);
    protected target: T;
    getName(): string;
}
