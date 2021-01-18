import axios from "axios";
import { Movie } from "../model/Movie";
import { MovieDetail } from "../model/MovieDetail"
import { API_KEY, DETAIL_MOVIE_URL, DISCOVER_MOVIE_URL, GENRE_URL, IMAGE_PATH } from "../utils/constants";
import { Arg, Field, Int, ObjectType, Query, Resolver } from "type-graphql";
import { MovieError } from "../error/MovieErrors";
import { randomPrice } from "../utils/randomPrice";
import { Genres } from "../model/Genres";

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

    @Field(() => MovieError, {nullable: true})
    error?: MovieError
}

@Resolver()
export class MovieResolver {

    @Query(() => MoviesReponse)
    async fetchMovies(
        @Arg("page", () => Int) page: number
    ): Promise<MoviesReponse> {

        const movies = axios.get(DISCOVER_MOVIE_URL, {
            params: {
                sort_by: "vote_count.desc",
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

            
                const addedMovieData = {
                    poster: `${IMAGE_PATH}${movie.poster_path}`,
                    genres: movieGenre,
                    wishList: false,
                    price: randomPrice(1000)
                }
                
                const data = {
                    ...movie,
                    ...addedMovieData
                }
                
                return data as Movie
                
            })
            console.log(finalResult[0].price)
            
            return finalResult
        })
        

        try {
            const movies = await moviesFinal
            return {
                movieResponse: {
                    movies,
                    page
                }
            }
        }catch(error) {
            return {
                error: {
                    name: error.name,
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
}