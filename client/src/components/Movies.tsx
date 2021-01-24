import { Button, SimpleGrid } from "@chakra-ui/react"
import React, { memo, useState } from "react"
import { useFetchMoviesQuery } from "../generated/graphql"
import { MovieDisplay } from "./MovieDisplay"

interface MoviesProps {
  selectedGenres: {
    genres: string[]
  }
}

export const Movies = memo(() => {


    const {data, fetchMore} = useFetchMoviesQuery({
        variables: {
            offset: 10
        },
        fetchPolicy: "cache-and-network"
    })
   
    const onFetchMore = async () => {
        await fetchMore({
            variables: {
               offset: 10
            }
        })
    }

    return (
        <>
            <Button 
                m='auto'
                mb={4} 
                colorScheme="orange"
              >
                Load more
              </Button>
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
        </>
    )
})