import { MyContext } from "src/context/MyContext";
import { Ctx, Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cart } from "./Cart";
import { Movie } from "./Movie";


@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column({unique: true})
    username: string

    @Field()
    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Field(() => Int, {nullable: true})
    @Column({nullable: true})
    age?: number

    @OneToMany(() => Cart, cart => cart.user)
    movieConnection: Promise<Cart[]>

    @Field(() => String)
    @CreateDateColumn()
    created_at: Date

    @Field(() => String)
    @UpdateDateColumn()
    update_at: Date

    @Field(() => [Movie], {nullable: true}) 
    async movieItems(
        @Ctx() {cartLoader}: MyContext
    ) {
        return cartLoader.load(this.id)
    }
}