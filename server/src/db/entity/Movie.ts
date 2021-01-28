import { MyContext } from "src/context/MyContext";
import { Ctx, Field, Float, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cart } from "./Cart";
import { Genre } from "./Genre";
import { MovieGenre } from "./MovieGenre";
import { User } from "./User";


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

    @OneToMany(() => Cart, cart => cart.movies)
    userConnection: Promise<Cart[]>

    @OneToMany(() => MovieGenre, mg => mg.genre)
    genreConnection: Promise<MovieGenre[]>

    @Column()
    @Field(() => Boolean)
    adult: boolean

    @Column({nullable: true})
    @Field(() => String, {nullable: true})
    original_title: string

    @Column({nullable: true})
    @Field(() => String, {nullable: true})
    poster: string

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

    @Field(() => [Genre], {nullable: true})
    async genres(
        @Ctx() {genreLoader}: MyContext
    ) {
        return genreLoader.load(this.id)
    }

}