import { KioQuery } from './kio-query';
export interface KioPublicationQuery extends KioQuery {
    populate?: boolean;
}
