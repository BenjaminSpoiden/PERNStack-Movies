import "reflect-metadata"
import { ApolloServer } from 'apollo-server-express'
import express from "express"
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/UserResolver'
import { PORT } from './utils/constants'


const initServer = async() => {
    const app = express()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                UserResolver
            ],
            validate: false
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