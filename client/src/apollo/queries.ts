import { gql } from "@apollo/client";

export const QUERY_CART = gql`
    query GetCart {
        cart @client {
            id
            original_title
            price
        }
    }
`

export const QUERY_CURRENCY = gql`
    query GetCurrency {
        currency @client
    }
`