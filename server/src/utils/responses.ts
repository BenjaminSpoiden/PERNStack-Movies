import { User } from "../db/entity/User"
import { GenericError } from "../error/GenericError"
import { ObjectType, Field } from "type-graphql"

@ObjectType()
export class UserResponse {
    @Field(() => [GenericError], {nullable: true})
    errors?: GenericError[] 

    @Field(() => User, {nullable: true})
    user?: User
}