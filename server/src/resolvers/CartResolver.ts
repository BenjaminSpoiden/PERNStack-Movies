import { Cart } from "../db/entity/Cart";
import { Arg, Ctx, Int, Mutation, Resolver } from "type-graphql";
import { MyContext } from "src/context/MyContext";


@Resolver()
export class CartResolver {

    @Mutation(() => Boolean)
    async deleteItems(
        @Ctx() {req}: MyContext
    ) {
        //@ts-ignore
        const user_id = req.session.userId

        if(!user_id) return false
        try {
            await Cart.delete({})
            return true
        }catch(e) {
            console.log(e.message)
            return false
        }
    }

    @Mutation(() => Boolean)
    async addItems(
        @Arg("movie_id", () => Int) movie_id: number,
        @Ctx() {req}: MyContext
    ) {
        //@ts-ignore
        const user_id = req.session.userId
        if(!user_id) return false
        try {
            await Cart.create({user_id, movie_id}).save()
            return true
        }catch (e) {
            console.log(e.message)
            return false
        }
    }

}