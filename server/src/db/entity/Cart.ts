import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Movie } from "./Movie";
import { User } from "./User";

@Entity()
@ObjectType()
export class Cart extends BaseEntity {

    @PrimaryColumn()
    user_id: number

    @PrimaryColumn()
    movie_id: number

    @ManyToOne(() => User, user => user.movieConnection, {primary: true})
    @JoinColumn({name: "user_id"})
    user: Promise<User>


    @Field(() => [Movie])
    @ManyToOne(() => Movie, movie => movie.userConnection, {primary: true})
    @JoinColumn({name: "movie_id"})
    movies: Promise<Movie>
}