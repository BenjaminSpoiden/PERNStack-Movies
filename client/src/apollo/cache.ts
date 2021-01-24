import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                fetchMovies: {
                    keyArgs: ["id"],
                    merge: (existing = [], incoming: any[]) => {
                       
                        return incoming
                    }
                }
            }
        }
    }
})