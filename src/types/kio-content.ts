import { KioContentModel, KioFragmentModel, KioPublicationModel, KioQueryModel } from '../classes'

import { KioNodeType } from '../enums'

export type KioNodeTypeName = keyof typeof KioNodeType

export type KioCtnPublication = KioNodeType.publication
export type KioCtnFragment = KioNodeType.fragment
export type KioCtnTxt = KioNodeType.txt
export type KioCtnSrc = KioNodeType.src


export type KioNestedContentType = KioCtnFragment|KioCtnPublication
export type KioChildContentType = KioCtnSrc|KioCtnTxt|KioCtnFragment
export type KioPrimitiveContentType = KioCtnSrc|KioCtnTxt

export type KioStructureType = KioNestedContentType|KioPrimitiveContentType

export type KioContentType = KioCtnPublication|KioCtnFragment|KioCtnTxt|KioCtnSrc
export type KioQueryableContentType = KioCtnPublication|KioCtnTxt|KioCtnSrc

export type KioModelType = KioContentModel|KioFragmentModel|KioPublicationModel