import { AssociationTypes } from './association-types.enum'
import { matchType } from './matchType'


export const associate = ( left:any, right:any ) => {
  return new Association(left,right)
}

export class Association {

  constructor(context:any,other:any){
    this.context = context
    this.contextType = matchType(context)
    this.other = other
    this.otherType = matchType(other)
  }

  readonly context:any;
  readonly contextType:AssociationTypes;
  readonly other:any;
  readonly otherType:AssociationTypes;


}