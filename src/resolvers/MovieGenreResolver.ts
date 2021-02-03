import { MovieGenre } from "../db/entity/MovieGenre";
import { Arg, Mutation, Resolver, Int } from "type-graphql";
import { Movie } from "../db/entity/Movie";

@Resolver()
export class MovieGenreResolver {


    @Mutation(() => Boolean)
    async deleteMovie(
        @Arg("movie_id", () => Int) movie_id: number
    ) {
        try {
            await MovieGenre.delete({ movie_id })
            await Movie.delete({ id: movie_id })
            return true
        }catch(e) {
            console.log(e.message)
            return false
        }
    }


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

}