import { useQuery } from "@apollo/client"
import { Divider, Flex, SimpleGrid, Text, Button, useToast } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import React from "react"
import { addApolloState, initializeApolloClient } from "../../apollo/client"
import { QUERY_CURRENCY } from "../../apollo/queries"
import { CartItem } from "../../components/CartItem"
import { Container } from "../../components/Container"
import { LaptopWrapper } from "../../components/LaptopWrapper"
import { NavBar } from "../../components/NavBar"
import { FetchUsersDocument, FetchUsersQuery, MeDocument, useDeleteItemsMutation } from "../../generated/graphql"
import { useGetCart } from "../../hooks/useGetCart"

const Cart = () => {
   
    const {data, loading} = useGetCart()
    const router = useRouter()
    const toast = useToast()
    
    const currencyQueryResult = useQuery(QUERY_CURRENCY)

    const currentCurrency = currencyQueryResult.data.currency.currentCurrency

    const [deleteItems, {loading: loadingPurchase}] = useDeleteItemsMutation()

    const onPurchase = async() => {
        await deleteItems({
            refetchQueries: [{
                query: MeDocument
            }]
        })
        router.push("/")
        toast({
            title: "Purchase successful",
            description: "Thank you for your purchase.",
            status: "success",
            isClosable: true,
            duration: 2000,
        })
    }

    if(loading) {
        return <div>loading...</div>
    }

    if(!data?.me) {
        return <div>Couldn't find user</div>
    }

    const totalPrice = () => {
        let totalPrice = 0
        data.me?.movieItems?.forEach(item => {
            totalPrice += item.price
        })

        return totalPrice
    }

    return (
        <>
            <Head>
                <title>Cart</title>
            </Head>
            <Container minH="100vh">
                <NavBar />
                <LaptopWrapper>
                    <Flex mt="100px" maxW="1280px" align="center" flexDir="column" p={4}>
                        <SimpleGrid maxW="768px" w="100%" spacing={4} >
                            {data.me.movieItems?.map(item => (
                                <CartItem 
                                    key={item.id} 
                                    movieItem={item} 
                                    currentCurrency={currentCurrency}
                                />
                            ))}
                        </SimpleGrid>
                        <Flex flexDir="column" align="flex-end" maxW="768px" w="100%" >
                            <Divider w="250px" my={4}/>
                            <Text fontSize="lg">Total Price: {currentCurrency === 'EUR' ? '€' : '$'} {totalPrice().toFixed(2)}</Text>
                            <Button 
                                mt={4} 
                                variant="outline" 
                                colorScheme="green"
                                isLoading={loadingPurchase}
                                onClick={onPurchase}
                                >
                                    Purchase Product
                            </Button>
                        </Flex>
                    </Flex>
                </LaptopWrapper>
            </Container>
        </>
    )
}

export async function getStaticPaths() {

    const apolloClient = initializeApolloClient()
    const {data} = await apolloClient.query<FetchUsersQuery>({
        query: FetchUsersDocument
    })

    const paths = data.fetchUsers.map((user) => ({
        params: {id: user.id.toString()}
    }))

    return {
        paths,
        fallback: false 
    };
}

export async function getStaticProps() {
    const apolloClient = initializeApolloClient()

    return addApolloState(apolloClient, {
        props: {}, 
        revalidate: 1
    })
}


export default Cart