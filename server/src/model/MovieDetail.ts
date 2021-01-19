import { Field, Float, Int, ObjectType } from "type-graphql";
import { Movie } from "./Movie";
import { ProductionCompany } from "./ProductionCompany";

@ObjectType()
export class MovieDetail extends Movie {

    @Field()
    overview: string

    @Field(() => Float)
    popularity: number

    @Field()
    status: string

    @Field(() => Int)
    revenue: number

    @Field(() => [ProductionCompany])
    production_companies: ProductionCompany[]

    @Field()
    homepage: string

    @Field(() => Int)
    budget: number
}