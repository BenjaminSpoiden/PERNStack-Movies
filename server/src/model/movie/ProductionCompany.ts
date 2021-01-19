import { Field, Int, ObjectType } from "type-graphql";


@ObjectType()
export class ProductionCompany {

    @Field(() => Int)
    id: number

    @Field()
    logo_path: string

    @Field()
    name: string

}