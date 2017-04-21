
export interface TracerTarget {
  [key:string]: Function;
}

export const wrapTarget = ( target:TracerTarget ) => {

  const targetName = target.constructor.name

  const originalMethods:any = {}

  const wrapTargetMethod = ( methodName:string ) => {
    const method = target[methodName]
    originalMethods[methodName] = method
    
    const methodReplacement = ( ...args:any[] ) => {
      console.groupCollapsed(targetName+'::'+methodName)
      args.forEach ( (arg,idx) => console.log('arg #%s\t%s', idx, typeof arg, arg ) )
      console.groupEnd()
      const rv = method(...args)
      return rv
    }

    target[methodName] = methodReplacement
  }

  const unwrapTargetMethod = ( methodName:string ) => {
    target[methodName] = originalMethods[methodName]
  }

  const methodNames = Object.keys(target).filter ( key => 'string' === typeof target[key] )

  methodNames.forEach ( wrapTargetMethod )

  return {
    unwrap: () => {
      methodNames.forEach ( unwrapTargetMethod )
    }
  }
}