import { KioContentModel, KioFragmentModel, KioPublicationModel, KioQueryModel } from '../classes'

export type KioContentType = "publication"|"fragment"|"txt"|"src"|string

export type KioModelType = KioContentModel|KioFragmentModel|KioPublicationModel