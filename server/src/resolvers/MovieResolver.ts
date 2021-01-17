import axios from "axios";
import { Movie } from "../model/Movie";
import { API_KEY, POPULAR_MOVIE_PATH } from "../utils/constants";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class MovieResolver {

    @Query(() => [Movie])
    async hello(): Promise<Movie[]> {
       
        
        return new Promise((resolve, reject) => {
            axios.get(POPULAR_MOVIE_PATH + `?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
               resolve(response.data.results)
            }) 
            .catch(err => reject(err.message))
        })
    }
}