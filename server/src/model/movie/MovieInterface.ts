import { Field, Float, Int, InterfaceType } from "type-graphql";
import { Genres } from "./Genres";

@InterfaceType()
export abstract class AbstractMovieClass {
    @Field(() => Int)
    id: number

    @Field(() => Boolean)
    adult: boolean

    @Field()
    original_title: string

    @Field()
    overview: string

    @Field()
    popularity: number

    @Field(() => String, {nullable: true})
    poster?: string

    @Field(() => [Genres])
    genres: Genres[]

    @Field({nullable: true})
    release_date?: string

    @Field(() => Float)
    vote_average: number

    @Field(() => Int)
    vote_count: number

    @Field(() => Float)
    readonly price: number

    @Field(() => Boolean)
    wishList: boolean
}