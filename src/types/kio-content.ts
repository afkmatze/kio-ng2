import { KioContentModel, KioFragmentModel, KioPublicationModel, KioQueryModel } from '../classes'

export type KioContentType = "publication"|"fragment"|"txt"|"src"|string

export type KioModelType = KioContentModel|KioFragmentModel|KioPublicationModel

export type KioContentTypeSrc = "src"
export type KioContentTypeTxt = "txt"
export type KioContentTypeFragment = "fragment"
export type KioContentTypePublication = "pub"

export type KioNestedContentTypes = KioContentTypeFragment | KioContentTypePublication
export type KioPrimitiveContentTypes = KioContentTypeSrc | KioContentTypeTxt

export type KioContentTypes = KioNestedContentTypes | KioPrimitiveContentTypes