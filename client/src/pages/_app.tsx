import { ApolloProvider } from "@apollo/client"
import 'antd/dist/antd.css';
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AppProps } from 'next/app'
import { useApollo } from "../hooks/useApollo"


function MyApp({ Component, pageProps }: AppProps) {

  const client = useApollo(pageProps)

  return (
    <ApolloProvider client={client} >
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
