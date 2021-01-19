import { AxiosResponse } from "axios"
import { Movie } from "../model/movie/Movie"
import { IMAGE_PATH } from "./constants"
import { randomPrice } from "./randomPrice"

export const genericMoviePromise = (movies: Promise<AxiosResponse<any>>, genres: Promise<AxiosResponse<any>>) => {

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
        
        return finalResult
    })

    return moviesFinal
}

