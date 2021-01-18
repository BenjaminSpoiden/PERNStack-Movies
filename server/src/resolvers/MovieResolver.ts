import axios from "axios";
import { Movie } from "../model/Movie";
import { API_KEY, GENRE_URL, POPULAR_MOVIE_URL, } from "../utils/constants";
import { Arg, Field, Int, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
class PaginatedMovies {
    @Field(() => Int)
    page: number

    @Field(() => [Movie])
    movies: Movie[]
}

@Resolver()
export class MovieResolver {

    @Query(() => PaginatedMovies)
    async fetchMovies(
        @Arg("page", () => Int) page: number
    ): Promise<PaginatedMovies> {

        const movies = axios.get(POPULAR_MOVIE_URL, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page
            }
        })

        const genres = axios.get(GENRE_URL, {
            params: {
                api_key: API_KEY,
                language: 'en-US'
            }
        })

        const moviesFinal = Promise.all([movies, genres]).then(response => {
            const movies = response[0].data.results as any[]
            const genres = response[1].data.genres as any[]

            const finalResult = movies.map(movie => {
                const movieGenre = movie.genre_ids.map((genre_id: any) => {
                    let genre = genres.filter(genre => genre.id === genre_id)
                    return genre[0]
                })
            
                const genreObject = {
                    genres: movieGenre
                }
                
                const data = {
                    ...movie,
                    ...genreObject
                }
                
                return data as Movie
            })

            return finalResult
        })

        return {
            page,
            movies: await moviesFinal,
        }
    }
}