import { Button, Flex, SimpleGrid } from "@chakra-ui/react"
import React, { useState } from "react"
import { useFetchMoviesQuery } from "../generated/graphql"
import { MovieDisplay } from "./MovieDisplay"

interface MoviesProps {
  selectedGenres: {
    genres: number[]
  }
}

export const Movies = ({selectedGenres}: MoviesProps) => {

    const [paginateLoading, setPaginateLoading] = useState(false)

    const {data, fetchMore, variables} = useFetchMoviesQuery({
      variables: {
        cursor: null, 
        limit: 10
      }
    })

    console.log(selectedGenres)

   
    const onFetchMore = async () => {
      setPaginateLoading(true)
      
      await fetchMore({
        variables: {
          cursor: data?.fetchMovies.movies[data.fetchMovies.movies.length - 1].release_date,
          limit: variables?.limit
        }
      })

      setPaginateLoading(false)
    }

    console.log(data)

    return (
        <>
          <Flex flexDir="column" >
            <SimpleGrid columns={[1]} gap={8} >
              {
                data
                  ? data.fetchMovies.movies.map(movie => (
                    <MovieDisplay
                      key={movie.id}
                      movieData={movie}
                    />
                  ))
                  : "No data"
              }
            </SimpleGrid>
            <Button 
              w='100%'
              disabled={!data?.fetchMovies.hasMore}
              isLoading={paginateLoading}
              my={4} 
              colorScheme="orange"
              onClick={async () => await onFetchMore()}
            >
              Load more
            </Button>
          </Flex>
        </>
    )
}