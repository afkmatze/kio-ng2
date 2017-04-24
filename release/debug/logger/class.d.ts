import { KioModelType } from '../../types/kio-content';
import { Entry, EntryPayload } from './interfaces';
import { LoggerContext } from './types';
export interface ErrorArgs {
    [key: string]: any;
}
export interface ContextPredicate {
    (context: KioModelType, idx?: number, contexts?: LoggerContext[]): boolean;
}
export declare class Logger {
    errors: Set<any>;
    contexts: Set<LoggerContext>;
    contextLogs: WeakMap<LoggerContext, Set<Entry>>;
    protected getContext(context: LoggerContext): Set<Entry>;
    associate(context: any, other: any): void;
    log(context: LoggerContext, payload: EntryPayload): void;
    logError(contextClass: any, context: LoggerContext, callerFn: Function, error: any, args: ErrorArgs): void;
    filterContext(predicate: ContextPredicate): LoggerContext;
    filterContextByModifier(modifier: string): LoggerContext;
    findContext(predicate: ContextPredicate): LoggerContext;
    contextsOfType(type: any): any[];
    getPublications(): KioModelType[];
}
