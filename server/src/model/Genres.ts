import { Field, Int, ObjectType } from "type-graphql";


@ObjectType()
export class Genres {
    @Field(() => Int)
    id: number

    @Field()
    name: string
}