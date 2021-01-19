import { randomPrice } from "../utils/randomPrice";
import { Field, Float, Int, ObjectType } from "type-graphql";
import { Genres } from "./Genres";
import { MovieInterface } from "./MovieInterface";

@ObjectType()
export class Movie implements MovieInterface {
    
    @Field(() => Int)
    id: number

    @Field(() => Boolean)
    adult: boolean

    @Field()
    original_title: string

    @Field()
    overview: string

    @Field(() => Float)
    popularity: number

    @Field(() => String, {nullable: true})
    poster?: string

    @Field(() => [Genres])
    genres: Genres[]

    @Field()
    release_date: string

    @Field(() => Float)
    vote_average: number

    @Field(() => Int)
    vote_count: number

    @Field(() => Boolean)
    wishList: boolean;

    @Field(() => Int)
    price: number


    getPrice() {
        return randomPrice(1000)
    }

    getWishList() {
        return false
    }

}