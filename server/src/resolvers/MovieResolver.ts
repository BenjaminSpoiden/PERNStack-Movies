import { Movie } from "../db/entity/Movie";
import { Arg, Field, Int, ObjectType, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";

@ObjectType()
export class PaginatedMovies {
    @Field(() => [Movie])
    movies: Movie[]

    @Field(() => Boolean)
    hasMore: boolean
}

@Resolver(Movie)
export class MovieResolver {

    @Query(() => Movie, {nullable: true})
    async fetchMovie(
        @Arg('id', () => Int) id: number
    ): Promise<Movie | null> {
        return new Promise((resolve, reject) => {
            Movie.findOne(id)
                .then(response => {
                    if(response) resolve(response)
                    else resolve(null)
                })
                .catch(err => {
                    reject(err.message)
                })
        })
    }

    @Query(() => PaginatedMovies)
    async fetchMovies(
        @Arg("offset", () => Int, { nullable: true, defaultValue: 0 }) offset: number
    ): Promise<PaginatedMovies> {

        const limit = Math.min(50, 10)

        const moviesQuery = await getConnection().query(`
            SELECT * FROM movie
            ORDER BY movie.release_date DESC
            LIMIT 11
            OFFSET ${offset};
        `) as Movie[]
        return {
            movies: moviesQuery.slice(0, 10),
            hasMore: moviesQuery.length === limit + 1
        }
    }
}
