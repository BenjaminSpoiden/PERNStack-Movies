import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { mergeDeep } from '@apollo/client/utilities'
import { isEqual } from 'lodash'
import { cache } from './cache'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject>

const createHttpLink = () => {
    return new HttpLink({
        uri: 'http://localhost:4000/graphql',
        credentials: "include"
    })
}

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",  
        link: createHttpLink(),
        cache
    })
}

export const initializeApolloClient = (initializeState = null) => {
    const _apolloClient = apolloClient ?? createApolloClient()

    if(initializeState) {
        const existingCache = _apolloClient.extract()

        const data = mergeDeep(initializeState, existingCache, {
            arrayMerge: (destinationArray: any[], sourceArray: any[]) => [
                ...sourceArray,
                ...destinationArray.filter((d) => (
                    sourceArray.every((s) => !isEqual(d, s))
                ))
            ]
        })

        _apolloClient.cache.restore(data)
    }

    if(typeof window === 'undefined') return _apolloClient

    if(!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

export const addApolloState = (client: ApolloClient<NormalizedCacheObject>, pageProps: any) => {
    if(pageProps?.props) pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()

    return {
        props: {pageProps: pageProps}
    }
}




