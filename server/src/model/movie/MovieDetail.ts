import { Field, Float, Int, ObjectType } from "type-graphql";
import { Genres } from "./Genres";
import { AbstractMovieClass } from "./MovieInterface";
import { ProductionCompany } from "./ProductionCompany";

@ObjectType({implements: AbstractMovieClass})
export class MovieDetail implements AbstractMovieClass {

    id: number;
    adult: boolean;
    original_title: string;
    overview: string;
    poster?: string | undefined;
    genres: Genres[];
    release_date: string;
    vote_average: number;
    vote_count: number;
    price: number;
    wishList: boolean;
    
    @Field(() => Int)
    runtime: number

    @Field(() => Float)
    popularity: number

    @Field()
    status: string

    @Field(() => Int)
    revenue: number

    @Field(() => [ProductionCompany])
    production_companies: ProductionCompany[]

    @Field()
    homepage: string

    @Field(() => Int)
    budget: number
}