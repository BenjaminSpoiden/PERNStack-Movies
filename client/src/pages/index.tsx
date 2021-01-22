import { Button, Checkbox, Flex, Grid, GridItem, SimpleGrid, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
import { Container } from '../components/Container'
import { LaptopWrapper } from "../components/LaptopWrapper"
import { MovieDisplay } from "../components/MovieDisplay"
import { NavBar } from "../components/NavBar"
import { SearchInput } from "../components/SearchInput"
import { useFetchGenreQuery, useFetchMoviesQuery } from "../generated/graphql"



const Index = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [selectedGenres, setSelectGenres] = useState("")
  const  {data, fetchMore, variables} = useFetchMoviesQuery({
    variables: {
      page: currentPage,
      with_genres: selectedGenres
    }
  })

  const {data: genreData} = useFetchGenreQuery()

  const onFetchMore = async () => {
    await fetchMore({
      variables: {
        page: variables?.page
      }
    })
  }


  return (
    <Container minH="100vh">
      <NavBar />
      <LaptopWrapper>
        <Flex mt="100px" maxW='1280px' flexDir="row" >
          <Grid templateColumns={["1fr", "1fr", "1fr 2fr"]} gap={4}>
            <GridItem d={['none', 'none', "flex"]} w="100%" >
              <Flex flexDir="column" align="flex-start" justify="flex-start" >
               <SearchInput  />
               <VStack my={4} display="flex" alignItems="flex-start" justifyContent="flex-start" >
                 {genreData?.fetchGenre.map(genre => (
                  <Checkbox key={genre.id} onClick={() => setSelectGenres(String(genre.id + ","))} name="checkbox" size="lg" colorScheme="orange" textColor="gray.600" >{genre.name}</Checkbox>
                 ))}
               </VStack>
              </Flex>
            </GridItem>
            <GridItem >
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
            </GridItem>
          </Grid>
          
        </Flex>
      </LaptopWrapper>
    </Container>
  )
}
export default Index

