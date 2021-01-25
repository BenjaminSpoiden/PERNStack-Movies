import { MyContext } from "src/context/MyContext";
import { Ctx, Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./Movie";
import { MovieGenre } from "./MovieGenre";

@Entity()
@ObjectType()
export class Genre extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    name: string

    @OneToMany(() => MovieGenre, mg => mg.movie)
    movieConnection: Promise<Movie[]>

}