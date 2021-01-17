import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Movie {

    @Field(() => Int)
    id: number

    @Field(() => Boolean)
    adult: boolean

    @Field(() => String)
    original_title: string

    @Field(() => String)
    overview: string

    @Field(() => String)
    release_date: string

    @Field(() => String)
    vote_average: string

    @Field(() => String)
    vote_count: string
}