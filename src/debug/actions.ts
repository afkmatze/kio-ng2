import logger from './logger'
import { NodeLogger } from './logger/structure/NodeLogger.class'

import { KioNode } from '../interfaces'

export const register = <T extends KioNode>( target:T ):NodeLogger<T> => {
  return new NodeLogger<T>(target)
}