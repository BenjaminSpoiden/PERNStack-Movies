import { CloseButton, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"
import {  MeDocument, Movie, useDeleteItemMutation } from "../generated/graphql"

interface MovieItem {
    movieItem: Partial<Movie>,
    currentCurrency: any
}

export const CartItem = ({movieItem, currentCurrency}: MovieItem) => {

    const [deleteItem] = useDeleteItemMutation()
   
    const onDeleteItem = async () => {
        await deleteItem({
            variables: {
                movie_id: movieItem.id!
            },
            refetchQueries: [{
                query: MeDocument
            }]
        })
    }

    return (
        <>
            <Flex borderRadius="lg" shadow="lg" minH="100px" h="100%" w="100%" p={4} borderColor="orange.400" borderStyle="solid" borderWidth="1px" >
                <Flex w="100%" >
                    <Image src={movieItem.poster ? movieItem.poster : ""} w="50px" />
                    <Flex flexDir="column" ml={4} >
                        <Text textColor="white" >
                            {movieItem.original_title}
                        </Text>
                        <Flex flexDir="column">
                            {movieItem.genres?.map(genre => (
                                <Text key={genre.id} fontSize="xs" textColor="gray.500" >{genre.name}</Text>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex flexDir="column" align="flex-end" justify="space-between"  >
                        <CloseButton mt={-1} onClick={onDeleteItem} />
                        <Flex align="flex-end" justify="flex-end" >
                            <Text mr={2} >Price:</Text>
                            <Text>{currentCurrency === 'EUR' ? '€' : '$'}{movieItem.price?.toFixed(2)}</Text>
                        </Flex>
                    </Flex>
                    
                </Flex>
            </Flex>
        </>
    )
}