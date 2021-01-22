import { CalendarIcon, StarIcon } from "@chakra-ui/icons"
import { Flex, Text, Heading, Image, Icon, IconButton, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import {MdFavorite, MdFavoriteBorder, MdPlayCircleFilled} from "react-icons/md"
import { Movie } from "../generated/graphql"
import { useAuth } from "../hooks/useAuth"

interface MovieData {
    movieData: Movie
}


export const MovieDisplay: React.FC<MovieData> = ({movieData}) => {

    const formatter = new Intl.NumberFormat('en-BE', {
        style: "currency",
        currency: "EUR",
        
    }) 

    const [fav, setFav] = useState(movieData.wishList)

    const {me} = useAuth()

    return (
        <Flex flexDir={["column", "row", "row"]} boxShadow="lg" borderRadius="lg" overflow="hidden" >
            <Image src={movieData.poster || ""}/>
            <Flex flexDir="column" m={4}>
                <Flex align="center" justify="space-between">
                    <Heading size="md">{movieData.original_title}</Heading>
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
                <Flex align="center" justify="space-between">
                    <Flex align="center" >
                        <Icon as={CalendarIcon} w={3} h={3} color="gray.600" />
                        <Text fontSize="sm" color="gray.600" ml={1} >{movieData.release_date}</Text>
                    </Flex>
                    <Flex align="center" my={2} >
                        {movieData.genres.map(genre => (
                            <Text fontSize="sm" color="gray.600" ml={1}>
                                {genre.name} /
                            </Text>
                        ))}
                       
                    </Flex>
                </Flex>
                <Text textAlign="justify" >{movieData.overview}</Text>
                
                <Flex my={2} align="center" justify="space-between" >
                    <Flex flexDir="column" >
                        <Text fontSize="sm" color="gray.600">Rating:</Text>
                        <Flex>
                            {Array(10)
                                .fill("")
                                .map((_, i) => (
                                <StarIcon
                                    key={i * 2}
                                    color={i < movieData.vote_average ? "yellow.500" : "gray.300"}
                                />
                            ))}
                        </Flex>
                        <Text fontSize="sm" color="gray.600" >{movieData.vote_count} votes</Text>
                    </Flex>
                    <Flex flexDir="column" align="center" >
                        <Text fontSize="sm" color="gray.600">Price:</Text>
                        <Text mt={-1} > {formatter.format(movieData.price / 10)} </Text>
                    </Flex>
                </Flex>
                    <Flex mt={2} >
                        <Button colorScheme="red" leftIcon={<MdPlayCircleFilled />} >Watch Trailer</Button>
                    </Flex>
            </Flex>
        </Flex>
    )
}