import { useQuery } from "@apollo/client"
import { CalendarIcon, StarIcon } from "@chakra-ui/icons"
import { Flex, Text, Heading, Image, Icon, IconButton, Wrap, WrapItem, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import { BiCart } from "react-icons/bi"
import {MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { QUERY_CURRENCY } from "../apollo/queries"
import { MeDocument, Movie, useAdditemMutation } from "../generated/graphql"
import { useAuth } from "../hooks/useAuth"

interface MovieData {
    movieData: Movie
}


export const MovieDisplay: React.FC<MovieData> = ({movieData}) => {

    const currencyQueryResult = useQuery(QUERY_CURRENCY)
  
    const currentCurrency = currencyQueryResult.data.currency.currentCurrency
    
    const [fav, setFav] = useState(movieData.wish_list)

    const {me} = useAuth()

    const [addItem] = useAdditemMutation()

    return (
        <Flex flexDir={["column", "row", "row"]} boxShadow="lg" borderRadius="lg" overflow="hidden" >
            <Image src={movieData.poster || ""}/>
            <Flex flexDir="column" m={4} w={["auto", "100%"]} >
                <Flex align="center" justify="space-between">
                    <Heading size="md" textColor="white" >{movieData.original_title}</Heading>
                    <IconButton
                        onClick={() => {
                            setFav(c => !c)
                        }}
                        disabled={!me}
                        color="red.600"
                        variant="ghost"
                        aria-label="fav"
                        fontSize="24px"
                        icon={ fav ? <MdFavorite /> : <MdFavoriteBorder />}
                    />
                </Flex>
                <Flex flexDir={['column', 'column', 'row']} align={["flex-start", "flex-start", "center"]} justify="space-between">
                    <Flex align="center" >
                        <Icon as={CalendarIcon} w={3} h={3} color="gray.600" />
                        <Text fontSize="sm" color="gray.600" ml={1} >{movieData.release_date}</Text>
                    </Flex>
                    <Wrap d="flex" align="center" my={2} >
                        {movieData?.genres?.map(genre => (
                            <WrapItem key={genre.id} >
                                <Text fontSize="sm" color="gray.600">{genre.name} /</Text>
                            </WrapItem>
                        ))}
                       
                    </Wrap>
                </Flex>
                <Flex>
                    <Text textAlign="justify" wordBreak="break-word" >{movieData.overview}</Text>
                </Flex>
                <Flex flexDir={["column", "column", "row"]} my={2} align={["flex-start", "flex-start", "center"]} justify="space-between" >
                    <Flex flexDir="column" >
                        <Text fontSize="sm" color="gray.600">Rating:</Text>
                        <Flex>
                            {Array(10)
                                .fill("")
                                .map((_, i) => (
                                <StarIcon
                                    key={i * 2}
                                    color={i < movieData.vote_average! ? "yellow.500" : "gray.300"}
                                />
                            ))}
                        </Flex>
                        <Text fontSize="sm" color="gray.600" >{movieData.vote_count} votes</Text>
                    </Flex>
                    <Flex flexDir="column" align="center" >
                        <Text fontSize="sm" color="gray.600">Price:</Text>
                        <Text mt={-1} > {currentCurrency === 'EUR' ? '€' : '$'}{movieData.price.toFixed(2)}</Text>
                    </Flex>
                </Flex>
                <Flex>
                    <Button 
                        leftIcon={<BiCart />} 
                        mt={4} 
                        disabled={!me} 
                        colorScheme="orange" 
                        variant="outline"
                        onClick={() => addItem({
                            variables: {
                                movie_id: movieData.id
                            },
                            refetchQueries: [{
                                query: MeDocument
                            }]
                        })}
                        >
                        Add to card
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}