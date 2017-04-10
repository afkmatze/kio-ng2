import { KioNode } from './kio-node';
import { KioFragment } from './kio-fragment';
import { KioPublicationHead } from './kio-publication-head';
export interface KioPublication extends KioFragment {
    title: string;
    head: KioPublicationHead;
    body: KioNode[];
}
