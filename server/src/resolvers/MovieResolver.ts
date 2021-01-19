import axios from "axios";
import { Movie } from "../model/movie/Movie";
import { MovieDetail } from "../model/movie/MovieDetail"
import { API_KEY, CAST_URL, DETAIL_MOVIE_URL, DISCOVER_MOVIE_URL, GENRE_URL, IMAGE_PATH, SEARCH_MOVIE_URL, TRENDING_MOVIE_URL } from "../utils/constants";
import { Arg, Field, Int, ObjectType, Query, Resolver } from "type-graphql";
import { GenericError } from "../error/GenericError";
import { Genres } from "../model/movie/Genres";
import { genericMoviePromise } from "../utils/GenericPromises";
import { MovieCast } from "../model/movie/MovieCast";

@ObjectType()
class PaginatedMovies {
    @Field(() => Int)
    page: number

    @Field(() => [Movie])
    movies: Movie[]
}

@ObjectType()
class MoviesReponse {
    @Field(() => PaginatedMovies, {nullable: true})
    movieResponse?: PaginatedMovies

    @Field(() => GenericError, {nullable: true})
    error?: GenericError
}

@Resolver()
export class MovieResolver {

    @Query(() => MoviesReponse)
    async fetchMovies(
        @Arg("page", () => Int) page: number,
        @Arg("with_genres", () => Int, {nullable: true}) with_genres?: number
    ): Promise<MoviesReponse> {

        const moviesResponse = axios.get(DISCOVER_MOVIE_URL, {
            params: {
                sort_by: "popularity.desc",
                api_key: API_KEY,
                language: 'en-US',
                with_genres,
                page
            }
        })

        const genres = axios.get(GENRE_URL, {
            params: {
                api_key: API_KEY,
                language: 'en-US'
            }
        })


        try {
            const movies = await genericMoviePromise(moviesResponse, genres)
            return {
                movieResponse: {
                    movies,
                    page
                }
            }
        }catch(error) {
            return {
                error: {
                    field: error.name,
                    message: error.message
                }
            }
        }
    }

    @Query(() => MovieDetail)
    async fetchMovieDetail(
        @Arg("movie_id", () => Int) movie_id: number
    ) {
        const {data} = await axios.get(DETAIL_MOVIE_URL + `/${movie_id}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US'
            }
        })

        const addedMovieData = {
            poster: `${IMAGE_PATH}${data.poster_path}`,
        }

        let newData = {
            ...data,
            ...addedMovieData
        }

        return newData as Movie
    }

    @Query(() => MoviesReponse)
    async fetchTrendingMovies(
        @Arg('page', () => Int) page: number
    ): Promise<MoviesReponse> {
        const trendingMovies = axios.get(TRENDING_MOVIE_URL, {
            params: {
                api_key: API_KEY,
                sort_by: "popularity.desc",
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

        try {
            const movies = await genericMoviePromise(trendingMovies, genres)
            return {
                movieResponse: {
                    movies,
                    page
                }
            }
        }catch(error) {
            return {
                error: {
                    field: error.name,
                    message: error.message
                }
            }
        }
    }

    @Query(() => [Genres])
    async fetchGenre() {
        const {data} = await axios.get(GENRE_URL, {
            params: {
                api_key: API_KEY,
                language: 'en-US'
            }
        })

        return data.genres as Genres[]
    }

    @Query(() => [Movie])
    async searchMovies(
        @Arg('query') query: string,
        @Arg('page', () => Int) page: number
    ): Promise<Movie[]> {

        const searchMovies = axios.get(SEARCH_MOVIE_URL, {
            params:{
                api_key: API_KEY,
                language: 'en-US',
                page,
                query,
                include_adult: false
            }
        })

        const genres = axios.get(GENRE_URL, {
            params: {
                api_key: API_KEY,
                language: 'en-US'
            }
        })

        return await genericMoviePromise(searchMovies, genres)
    }

    @Query(() => [MovieCast])
    async fetchCast(
        @Arg('movie_id', () => Int) movie_id: number
    ) {
        const {data} = await axios.get(CAST_URL + `/${movie_id}/credits`, {
            params: {
                api_key: API_KEY,
                language: 'en-US'
            }
        })

        return data.cast as MovieCast[]
    }
}