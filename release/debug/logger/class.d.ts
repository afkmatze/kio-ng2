import { KioModelType } from '../../types/kio-content';
import { Entry, EntryPayload } from './interfaces';
import { LoggerContext } from './types';
export interface ContextPredicate {
    (context: KioModelType, idx?: number, contexts?: LoggerContext[]): boolean;
}
export declare class Logger {
    contexts: Set<LoggerContext>;
    contextLogs: WeakMap<LoggerContext, Set<Entry>>;
    log(context: LoggerContext, payload: EntryPayload): void;
    filterContext(predicate: ContextPredicate): LoggerContext;
    filterContextByModifier(modifier: string): LoggerContext;
    findContext(predicate: ContextPredicate): LoggerContext;
    contextsOfType(type: any): any[];
    getPublications(): KioModelType[];
}
