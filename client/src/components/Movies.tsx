import { Button, SimpleGrid } from "@chakra-ui/react"
import React, { memo, useState } from "react"
import { useFetchMoviesQuery } from "../generated/graphql"
import { MovieDisplay } from "./MovieDisplay"

interface MoviesProps {
  selectedGenres: {
    genres: string[]
  }
}

export const Movies = memo(({selectedGenres}: MoviesProps) => {

    const [currentPage, setCurrentPage] = useState(2)

    console.log(selectedGenres.genres.toString())

    const {data, fetchMore} = useFetchMoviesQuery({
        variables: {
            page: 1,
            with_genres: selectedGenres.genres.toString()
        },
        fetchPolicy: "cache-and-network"
    })
   
    const onFetchMore = async () => {
        await fetchMore({
            variables: {
               page: currentPage,
               with_genres: selectedGenres
            }
        })
    }

    return (
        <>
            <Button 
                m='auto'
                disabled={data?.fetchMovies.length ? data.fetchMovies.length < 20 : true} 
                mb={4} 
                colorScheme="orange" 
                onClick={async () => {
                  setCurrentPage(c => c + 1)
                  await onFetchMore()
                }}
              >
                Load more
              </Button>
              <SimpleGrid columns={[1]} gap={8} >
                {
                  data
                    ? data.fetchMovies.map(movie => (
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