import { InMemoryCache } from "@apollo/client";
import { PaginatedMovies } from "../generated/graphql";

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                fetchMovies: {
                    keyArgs: ["offset"],
                    merge: (existing: PaginatedMovies | undefined, incoming: PaginatedMovies): PaginatedMovies => {
                        return {
                            ...incoming,
                            movies: [...(existing?.movies || []), ...incoming.movies]
                        }
                    }
                }
            }
        }
    }
})