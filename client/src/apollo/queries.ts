import { gql } from "@apollo/client";


export const QUERY_CURRENCY = gql`
    query GetCurrency {
        currency @client
    }
`