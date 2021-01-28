import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { cache } from './cache'

let apolloClient: ApolloClient<NormalizedCacheObject>

const createHttpLink = () => {
    return new HttpLink({
        uri: 'http://localhost:4000/graphql',
        credentials: "include"
    })
}

const createApolloClient = () => {
    return new ApolloClient({
        link: createHttpLink(),
        ssrMode: true,  
        cache
    })
}

export const initializeApolloClient = (initializeState: NormalizedCacheObject | null) => {
    const _apolloClient = apolloClient ?? createApolloClient()

    if(initializeState) _apolloClient.cache.restore(initializeState)

    if(typeof window === 'undefined') return _apolloClient

    apolloClient = apolloClient ?? _apolloClient

    return apolloClient
}


