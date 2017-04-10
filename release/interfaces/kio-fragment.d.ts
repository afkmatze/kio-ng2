import { KioContent } from './kio-content';
import { KioNode } from './kio-node';
export interface KioFragment extends KioContent {
    level?: number;
    children?: KioNode[];
    cont?: any[];
}
