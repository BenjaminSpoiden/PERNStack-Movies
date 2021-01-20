import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class MovieCast {
    
    @Field(() => Int)
    id: number

    @Field(() => Boolean)
    adult: boolean

    @Field()
    name: string

    @Field(() => Int)
    gender: number
}