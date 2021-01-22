import { InMemoryCache } from "@apollo/client";
import { FetchMoviesQuery } from "../generated/graphql";

export const cache = new InMemoryCache({
    // typePolicies: {
    //     Query: {
    //         fields: {
    //             fetchMovies: {
    //                 keyArgs: [],
    //                 merge(existing: FetchMoviesQuery | undefined, incoming: any[]): FetchMoviesQuery  {
    //                     // console.log("existing: ", existing)
    //                     // console.log("incoming: ", incoming)
    //                     return {
    //                         ...incoming,
    //                         fetchMovies: [...(existing?.fetchMovies || []), ...incoming]
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
})