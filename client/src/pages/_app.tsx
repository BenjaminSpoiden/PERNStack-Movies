import { ApolloProvider } from "@apollo/client"
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AppProps } from 'next/app'
import { client } from "../utils/client"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client} >
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
