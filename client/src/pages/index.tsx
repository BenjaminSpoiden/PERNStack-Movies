import { Checkbox, Flex, Grid, GridItem, VStack } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { Container } from '../components/Container'
import { LaptopWrapper } from "../components/LaptopWrapper"
import { Movies } from "../components/Movies"
import { NavBar } from "../components/NavBar"
import { SearchInput } from "../components/SearchInput"
import { useFetchGenreQuery, useSearchMoviesLazyQuery } from "../generated/graphql"
import { useDebounce } from "../hooks/useDebounce"


type StateInit = {
  genres: string[]
}

const Index = () => {
  const [selectedGenres, setSelectGenres] = useState<StateInit>({
    genres: []
  })
  const [searchInput, setSearchInput] = useState("")

  const debouncedSearchTerm = useDebounce(searchInput, 400)
  

  const {data: genreData} = useFetchGenreQuery()
  const [searchMovies, {data: searchData}] = useSearchMoviesLazyQuery()

 
  useEffect(() => {
    if(debouncedSearchTerm) {
      searchMovies({
        variables: {
          page: 1,
          query: searchInput
        }
      })
    }
  }, [debouncedSearchTerm])  


  const updateChanges = (e: React.ChangeEvent<HTMLInputElement>, genreId: string) => {
    if(e.target.checked) {
      setSelectGenres({
        genres: selectedGenres?.genres.concat(genreId)
      })
    }else {
      setSelectGenres({
        genres: selectedGenres?.genres.filter(val => val !== genreId)
      })
    }
  }

  return (
    <Container minH="100vh">
      <NavBar />
      <LaptopWrapper>
        <Flex mt="100px" maxW='1280px' flexDir="row" >
          <Grid templateColumns={["1fr", "1fr", "1fr 3fr"]} gap={4}>
            <GridItem d={['none', 'none', "flex"]} w="100%" >
              <Flex flexDir="column" align="flex-start" justify="flex-start" >
               <SearchInput onChange={(e) => setSearchInput(e.target.value)} />
               <VStack my={4} display="flex" alignItems="flex-start" justifyContent="flex-start" >
                 {genreData?.fetchGenre.map(genre => (
                  <Checkbox key={genre.id} onChange={(e) => {
                    updateChanges(e, `${genre.id}`)
                  }} 
                  name="checkbox" size="lg" colorScheme="orange" textColor="gray.600" >{genre.name}</Checkbox>
                 ))}
               </VStack>
              </Flex>
            </GridItem>
            <GridItem >
              <Movies selectedGenres={selectedGenres} />
            </GridItem>
          </Grid>
        </Flex>
      </LaptopWrapper>
    </Container>
  )
}
export default Index

