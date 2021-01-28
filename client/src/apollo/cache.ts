import { InMemoryCache, makeVar, ReactiveVar } from "@apollo/client";
import { PaginatedMovies } from "../generated/graphql";
import { CartItem, Currency } from "../model/Cart";

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
                },
                cart: {
                    read() {
                        return cartVar()
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


const initCart: CartItem = {
    id: 1,
    original_title: "test",
    price: 10
}

const initCurrency: Currency = {
    currentCurrency: 'EUR'
}

export const cartVar: ReactiveVar<CartItem> = makeVar<CartItem>(initCart)
export const currencyVar: ReactiveVar<Currency> = makeVar<Currency>(initCurrency)
