import { User } from "../db/entity/User";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { UserInput } from "../utils/UserInput";
import argon2 from "argon2"
import { MyContext } from "../context/MyContext";
import { UserResponse } from "../utils/responses";
import { GenericError } from "../error/GenericError";
import { UserValidatorSchema } from "../utils/UserValidatorSchema";
import { ValidationError } from "apollo-server-express";
import { getConnection } from "typeorm";

@Resolver(User)
export class UserResolver {

    @Query(() => [User])
    async fetchUsers() {
        return await User.find()
    }

    @Query(() => User)
    async fetchUser(
        @Arg('id', () => Int) id: number
    ) {
        return await User.findOne(id)
    }

    @Query(() => User, {nullable: true})
    async me(
        @Ctx() {req}: MyContext
    ) {
        //@ts-ignore
        const id = req.session.userId

        if(!id) return 

        return await User.findOne(id)
    }

    @Mutation(() => UserResponse)
    async createUser(
        @Arg('userInput') userInput: UserInput,
        @Ctx() {req}: MyContext
    ): Promise<UserResponse> {

        const errors: GenericError[] = []

        try {
            await UserValidatorSchema.validate(userInput, {abortEarly: false})
        }catch(e) {
            e.inner.forEach((error: ValidationError) => {
                errors.push({
                    field: error.path,
                    message: error.message
                })
            }) 

            return {
                errors
            }
        }

        const isEmail = !!await User.findOne({where: {email: userInput.email}}) 
        if(isEmail) {
            return {
                errors: [{
                    field: "email",
                    message: "The email is already taken."
                }]
            }
        }

        const isUsername = !!await User.findOne({where: {username: userInput.username}})
        if(isUsername) {
            return {
                errors: [{
                    field: "username",
                    message: "The username already exists"
                }]
            }
        }

        const hashedPassword = await argon2.hash(userInput.password)

        const user = await User.create({
                username: userInput.username.toLocaleLowerCase(),
                password: hashedPassword,
                email: userInput.email
            }).save()
        

        //@ts-ignore
        req.session.userId = user.id

        return {
            user
        }
    }

    @Mutation(() => UserResponse)
    async loginUser(
        @Arg('username') username: string,
        @Arg("password") password: string,
        @Ctx() {req}: MyContext
    ): Promise<UserResponse> {
        const user = await User.findOne(username.includes('@') 
            ? {where: {email: username}}
            : {where: {username: username.toLocaleLowerCase()}}
        )

        if(!user) {
            return {
                errors: [{
                    field: "username",
                    message: "The user doesn't exist."
                }]
            }
        }
        
        const checkPassword = await argon2.verify(user.password, password)
        if(!checkPassword) {
            return {
                errors: [{
                    field: "password",
                    message: "The password doesn't exist."
                }]
            }
        }

        //@ts-ignore
        req.session.userId = user.id

        return {
            user
        }

    }

    @Mutation(() => Boolean)
    async logoutUser(
        @Ctx() {req, res}: MyContext
    ): Promise<boolean> {
        //@ts-ignore
        const id = req.session.userId

        return new Promise(resolve => {
            if(!id) resolve(false)
            req.session.destroy(err => {
                if(err) {
                    resolve(false) 
                    return
                }
                res.clearCookie(process.env.COOKIE_NAME!)
                resolve(true)
            })
        })
    }

    @Mutation(() => Boolean)
    async deleteUser(
        @Arg('id', () => Int) id: number
    ) {
        return new Promise(resolve => {
            try{
                getConnection()
                    .createQueryBuilder()
                    .delete()
                    .from(User)
                    .where("id = :id", {id})
                    .execute()
                    .then(r => {
                        if(r.affected! === 0) {
                            resolve(false)
                        }
                        resolve(true)
                    })
                    .catch(e => {
                        console.log(e)
                        resolve(false)
                    })
            }catch(e) {
                console.log(e)
                resolve(false)
            }
        })
        
    }
}