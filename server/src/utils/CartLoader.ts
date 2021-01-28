import { Cart } from "../db/entity/Cart"
import { Movie } from "../db/entity/Movie"
import { In } from "typeorm"
import DataLoader from "dataloader"

const batchCart = async(user_ids: number[]) => {

    const cart = await Cart.find({
        join: {
            alias: "c",
            innerJoinAndSelect: {
                movie: "c.movie"
            }
        },
        where: {
            user_id: In(user_ids)
        }
    })


    const movieIdToCart: Record<number, Movie[]> = {}

    cart.forEach(item => {
        console.log('item: ', item)
        if(item.user_id in movieIdToCart) movieIdToCart[item.user_id].push((item as any).__movie__)
        else movieIdToCart[item.user_id] = [(item as any).__movie__]
        
    })

    return user_ids.map(user_id => { 
        return movieIdToCart[user_id]
    })
}

//@ts-ignore
export const createCartLoader = () => new DataLoader(batchCart)