import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @Field(() => String)
    @CreateDateColumn()
    created_at: Date

    @Field(() => String)
    @UpdateDateColumn()
    update_at: Date
}