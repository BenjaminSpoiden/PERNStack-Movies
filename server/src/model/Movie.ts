import { Field, Int, ObjectType } from "type-graphql";
import { Genres } from "./Genres";

@ObjectType()
export class Movie {

    @Field(() => Int)
    id: number

    @Field(() => Boolean)
    adult: boolean

    @Field()
    original_title: string

    @Field()
    overview: string

    @Field(() => [Genres])
    genres: Genres[]

    @Field()
    release_date: string

    @Field()
    vote_average: string

    @Field()
    vote_count: string
}