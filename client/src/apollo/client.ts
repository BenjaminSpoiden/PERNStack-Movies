import { ApolloClient, HttpLink } from '@apollo/client'
import { cache } from './cache'

export const client = new ApolloClient({
    link: new HttpLink({
        uri: "http://localhost:4000/graphql",
        credentials: "include"
    }),
    cache,
    ssrMode: true
})