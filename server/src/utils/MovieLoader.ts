import DataLoader from "dataloader"
import { Genre } from "../db/entity/Genre"
import { In } from "typeorm"
import { MovieGenre } from "../db/entity/MovieGenre"

const batchMovies = async(movies_ids: number[]) => {

    const movieGenre = await MovieGenre.find({
        join: {
            alias: "mg",
            innerJoinAndSelect: {
                genre: "mg.genre"
            }
        },
        where: {
            movie_id: In(movies_ids)
        }
    })

    console.log("movieGenre: ", movieGenre)

    const genreIdToMovies: {[key: number]: Genre[]} = {}

    movieGenre.forEach(mg => {
        if(mg.movie_id in genreIdToMovies) {
            genreIdToMovies[mg.movie_id].push((mg as any).__genre__)
        } else {
            genreIdToMovies[mg.movie_id] = [(mg as any).__genre__]
        }
    })

    console.log("movieGenre2: ", movieGenre)

    return movies_ids.map(movie_id => {
        
        return genreIdToMovies[movie_id]
    })
}

//@ts-ignore
export const createGenreLoader = () => new DataLoader(batchMovies)