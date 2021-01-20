import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GenericError {
    
    @Field()
    field: string

    @Field()
    message: string
}