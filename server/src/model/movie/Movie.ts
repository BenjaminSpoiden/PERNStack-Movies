import { ObjectType } from "type-graphql";
import { Genres } from "./Genres";
import { AbstractMovieClass } from "./MovieInterface";

@ObjectType({implements: AbstractMovieClass})
export class Movie implements AbstractMovieClass {
    id: number;
    adult: boolean;
    original_title: string;
    overview: string;
    popularity: number;
    poster?: string | undefined;
    genres: Genres[];
    release_date: string;
    vote_average: number;
    vote_count: number;
    price: number;
    wishList: boolean;
}