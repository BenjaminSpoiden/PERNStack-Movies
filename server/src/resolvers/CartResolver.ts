import { Cart } from "../db/entity/Cart";
import { Arg, Int, Mutation, Resolver } from "type-graphql";


@Resolver()
export class CartResolver {

    @Mutation(() => Boolean)
    async addItems(
        @Arg("user_id", () => Int) user_id: number,
        @Arg("movie_id", () => Int) movie_id: number
    ) {
        try {
            await Cart.create({user_id, movie_id}).save()
            return true
        }catch (e) {
            console.log(e.message)
            return false
        }
    }

}