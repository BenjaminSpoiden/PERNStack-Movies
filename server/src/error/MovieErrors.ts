import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class MovieError {
    @Field()
    name: string

    @Field()
    message: string
}