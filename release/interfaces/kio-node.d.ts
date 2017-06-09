export interface KioNodeHeaders {
    [key: string]: any;
}
export interface KioNode {
    cuid: string;
    type?: string;
    locale?: string;
    modifiers?: string[];
    parent?: KioNode;
    index?: number;
    isKioNode?: boolean;
    headers?: KioNodeHeaders;
}
