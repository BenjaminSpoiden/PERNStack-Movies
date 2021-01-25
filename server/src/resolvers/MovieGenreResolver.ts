import { MovieGenre } from "../db/entity/MovieGenre";
import { Arg, Mutation, Resolver, Int, Query } from "type-graphql";
import { Movie } from "../db/entity/Movie";
import { Genre } from "../db/entity/Genre";

@Resolver()
export class MovieGenreResolver {

    @Mutation(() => Boolean)
    async addGenreMovie(
        @Arg("movie_id", () => Int) movie_id: number,
        @Arg("genre_id", () => Int) genre_id: number
    ) {
        try {
            await MovieGenre.create({ movie_id, genre_id }).save()
            return true
        }catch (e) {
            console.log(e.message)
            return false
        }
    }

    @Query(() => Movie)
    async moviesWithGenres(
        @Arg("id", () => Int) id: number
    ) {
        return await Movie.findOne({id})
    }
}