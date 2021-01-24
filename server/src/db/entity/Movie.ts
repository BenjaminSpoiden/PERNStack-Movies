import { Genres } from "../../model/movie/Genres";
import { Field, Float, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@ObjectType()
@Entity()
export class Movie extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number

    @Column()
    @Field(() => Boolean)
    wish_list: boolean

    @Column({type: "float", nullable: true})
    @Field(() => Float, {nullable: true})
    popularity: number

    @Column()
    @Field(() => Int)
    price: number

    @Column({nullable: true})
    @Field(() => String, {nullable: true})
    overview: string

    @Column()
    @Field(() => Boolean)
    adult: boolean

    @Column({nullable: true})
    @Field(() => String, {nullable: true})
    original_title: string

    @Column({nullable: true})
    @Field(() => String, {nullable: true})
    poster: string

    @Column({type: "json"})
    @Field(() => [Genres])
    genres: Genres[]

    @Column({nullable: true})
    @Field(() => String, {nullable: true})
    release_date: string

    @Column({type: "float", nullable: true})
    @Field(() => Float, {nullable: true})
    vote_average: number

    @Column({nullable: true})
    @Field(() => Int, {nullable: true})
    vote_count: number

    @CreateDateColumn()
    @Field(() => String)
    created_at: Date

    @UpdateDateColumn()
    @Field()
    updated_at: Date
}