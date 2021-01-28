import { Cart } from "../db/entity/Cart"
import { Movie } from "../db/entity/Movie"
import { In } from "typeorm"
import DataLoader from "dataloader"

const batchCart = async(user_ids: number[]) => {

    const cart = await Cart.find({
        join: {
            alias: "c",
            innerJoinAndSelect: {
                movies: "c.movies"
            }
        },
        where: {
            user_id: In(user_ids)
        }
    })

    console.log("cart: ", cart)

    const movieIdToCart: {[key: number]: Movie[]} = {}

    cart.forEach(item => {
        if(item.movie_id in movieIdToCart) {
            movieIdToCart[item.user_id].push((item as any).__movies__)
        }else {
            movieIdToCart[item.user_id] = [(item as any).__movies__]
        }
    })

    console.log("movie: ", movieIdToCart)

    return user_ids.map(movie_id => movieIdToCart[movie_id])
}

//@ts-ignore
export const createCartLoader = () => new DataLoader(batchCart)