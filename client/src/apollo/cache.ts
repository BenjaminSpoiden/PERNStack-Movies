import { InMemoryCache, makeVar, ReactiveVar } from "@apollo/client";
import { PaginatedMovies } from "../generated/graphql";
import { Currency } from "../model/Currency";

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                fetchMovies: {
                    keyArgs: ["selected_genres"],
                    merge: (existing: PaginatedMovies | undefined, incoming: PaginatedMovies): PaginatedMovies => {
                        
                        return {
                            ...incoming,
                            movies: [...(existing?.movies || []), ...incoming.movies]
                        }
                    }
                },
                currency: {
                    read() {
                        return currencyVar()
                    }
                }
            }
        }
    }
})



const initCurrency: Currency = {
    currentCurrency: 'EUR'
}

export const currencyVar: ReactiveVar<Currency> = makeVar<Currency>(initCurrency)
