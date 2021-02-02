import { Flex, VStack, Checkbox } from "@chakra-ui/react"
import React from "react"
import { FetchGenresQuery } from "../generated/graphql"

interface PropsData {
    genreData: FetchGenresQuery | undefined
    updateChanges: (e: React.ChangeEvent<HTMLInputElement>, genreId: number) => void
}

export const Genres: React.FC<PropsData> = ({genreData, updateChanges}) => {

    return (
        <Flex flexDir="column" align="flex-start" justify="flex-start" >
            <VStack my={4} display="flex" alignItems="flex-start" justifyContent="flex-start" >
            {genreData?.fetchGenres.map(genre => (
                <Checkbox key={genre.id} onChange={(e) => {
                    updateChanges(e, genre.id)
                }} name="checkbox" size="lg" colorScheme="orange" textColor="gray.600" >{genre.name}</Checkbox>
            ))}
            </VStack>
        </Flex>
    )
}