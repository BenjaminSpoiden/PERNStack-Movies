import * as dotenv from "dotenv"
dotenv.config()
import "reflect-metadata"
import { ApolloServer } from 'apollo-server-express'
import express from "express"
import { buildSchema } from 'type-graphql'
import { MovieResolver } from './resolvers/MovieResolver'
import { PORT, PROD } from './utils/constants'
import { UserResolver } from "./resolvers/UserResolver"
import { createConnection } from "typeorm"
import cors from "cors"
import session from "express-session"
import Redis from "ioredis"
import connectRedis from "connect-redis"
// import { MyContext } from "./context/MyContext"
import { MovieGenreResolver } from "./resolvers/MovieGenreResolver"
// import { MyContext } from "./context/MyContext"
import { createGenreLoader } from "./utils/MovieLoader"
import { createCartLoader } from "./utils/CartLoader"
import { CartResolver } from "./resolvers/CartResolver"

const initServer = async() => {

    const app = express()
    const RedisStore = connectRedis(session)
    const redisClient = new Redis()

    await createConnection()

    

    app.use(cors({
        origin: process.env.CLIENT_HOST,
        credentials: true
    }))

    app.use(session({
        name: process.env.COOKIE_NAME,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365, //1 year 
            httpOnly: true,
            sameSite: "lax",
            secure: PROD
        },
        store: new RedisStore({
            client: redisClient,
            disableTouch: true
        }),
        secret: process.env.SESSION_SECRET!,
        saveUninitialized: false,
        resave: false
    }))


    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                MovieResolver,
                UserResolver,
                MovieGenreResolver,
                CartResolver
            ],
            validate: false
        }),
        context: ({req, res}: any) => ({
            req,
            res,
            genreLoader: createGenreLoader(),
            cartLoader: createCartLoader()
        })
    })

    apolloServer.applyMiddleware({
        app,
        cors: false
    })

    app.get('/', (_, res) => {
        res.send("Hello server")
    })

    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`)
    })
}

initServer().catch(err => console.log("Something went wrong: ", err)) 