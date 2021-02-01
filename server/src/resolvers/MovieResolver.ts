import { Movie } from "../db/entity/Movie";
import { Arg, Field, Int, ObjectType, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Genre } from "../db/entity/Genre";

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
        @Arg("limit", () => Int) limit: number,
        @Arg("cursor", () => String, {nullable: true}) cursor: string | null,
        @Arg("selected_genres", () => [Int], {nullable: true}) selected_genres: number[] | null
    ): Promise<PaginatedMovies> {

        const threshold = Math.min(50, limit)
        const overhead = threshold + 1

        // const moviesQuery = await getConnection().query(`
        //     SELECT * FROM movie
        //     ${cursor ? `WHERE movie.release_date < '${cursor}'` : ``}
        //     ORDER BY movie.release_date DESC
        //     LIMIT ${overhead};
        // `) as Movie[]

        const arrayToString = () => {
            return selected_genres
                ?.map((item, index, self) => {
                    if(index === self.length - 1) return `${item}`
                    else return `${item},`
                })
                .join("")
        }

        const moviesQuery = await getConnection().query(`
            SELECT 
                movie.id, 
                movie.overview,
                movie.wish_list, 
                movie.price, 
                movie.adult, 
                movie.original_title, 
                movie.poster, 
                movie.release_date,
                movie.vote_average, 
                movie.vote_count,
                movie.created_at, 
                movie.updated_at FROM movie
            INNER JOIN movie_genre AS mg ON mg.movie_id = movie.id
            ${ arrayToString() ? `WHERE mg.genre_id IN (${arrayToString()})` : ``}
            ${ cursor ? `AND movie.release_date < '${cursor}'` : ``}
            ORDER BY movie.release_date DESC
            LIMIT ${overhead};
        `) as Movie[]

        return {
            movies: moviesQuery.slice(0, threshold),
            hasMore: moviesQuery.length === overhead
        }
    }

    @Query(() => [Genre])
    async fetchGenres() {
        return await Genre.find()
    }

    @Query(() => Int)
    async movieTableLength() {

        return (await Movie.find()).length
    }


    @Query(() => [Movie])
    async searchMovies(
        @Arg("query", () => String, {nullable: true}) query?: string
    ) {

        const searchMovies = await getConnection().query(`
            SELECT * FROM movie
            WHERE LOWER(original_title) LIKE '%${query}%'
            ORDER BY release_date DESC;
        `) as Movie[]

       return searchMovies
    }
}
