import { StarIcon, TimeIcon } from "@chakra-ui/icons"
import { Flex, Text, FlexProps, Heading, Image, Icon, IconButton, Button, Center} from "@chakra-ui/react"
import React, { useState } from "react"
import {MdFavorite, MdFavoriteBorder, MdPlayCircleFilled} from "react-icons/md"


export const MovieDisplay = (props: FlexProps) => {

    const formatter = new Intl.NumberFormat('en-BE', {
        style: "currency",
        currency: "EUR",
        
    }) 

    const [fav, setFav] = useState(false)


    return (
        <Flex {...props} minH="640px">
            <Image src="https://picsum.photos/400/300"/>
            <Flex flexDir="column" m={4}>
                <Flex align="center" justify="space-between">
                    <Heading size="md">Movie title</Heading>
                    <IconButton
                        onClick={() => {
                            setFav(c => !c)
                        }}
                        color="red.600"
                        variant="ghost"
                        aria-label="fav"
                        fontSize="24px"
                        icon={ fav ? <MdFavorite /> : <MdFavoriteBorder />}
                    />
                </Flex>
                <Flex align="center" justify="space-between">
                    <Flex align="center" >
                        <Icon as={TimeIcon} w={3} h={3} color="gray.600" />
                        <Text fontSize="sm" color="gray.600" ml={1} >151 Min</Text>
                    </Flex>
                    <Flex align="center" my={2} >
                        <Text fontSize="sm" color="gray.600" ml={1}>Horror / Sci-Fi / Fantasy / War</Text>
                    </Flex>
                </Flex>
                <Text textAlign="justify" > Temporibus eos pariatur impedit, nesciunt doloribus commodi inventore a, iure at unde iste dolore nihil quam voluptatibus eaque repellendus ea eum laudantium!</Text>
                
                <Flex my={2} align="center" justify="space-between" >
                    <Flex flexDir="column" >
                        <Text fontSize="sm" color="gray.600">Rating:</Text>
                        <Flex>
                            {Array(10)
                                .fill("")
                                .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < 8 ? "yellow.500" : "gray.300"}
                                />
                            ))}
                        </Flex>
                        <Text fontSize="sm" color="gray.600" >28151 votes</Text>
                    </Flex>
                    <Flex flexDir="column" align="center" >
                        <Text fontSize="sm" color="gray.600">Price:</Text>
                        <Text mt={-1} > {formatter.format(7423 / 1000)} </Text>
                    </Flex>
                </Flex>
                    <Flex mt={2} >
                        <Button colorScheme="red" leftIcon={<MdPlayCircleFilled />} >Watch Trailer</Button>
                    </Flex>
            </Flex>
        </Flex>
    )
}