import { NodeLogger } from './logger/structure/NodeLogger.class';
import { KioNode } from '../interfaces';
export declare const register: <T extends KioNode>(target: T) => NodeLogger<T>;
