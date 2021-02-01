import { Checkbox, Flex, Grid, GridItem, VStack} from "@chakra-ui/react"
import Head from "next/head"
import React, { useState } from "react"
import { addApolloState, initializeApolloClient } from "../apollo/client"
import { Container } from '../components/Container'
import { LaptopWrapper } from "../components/LaptopWrapper"
import { Movies } from "../components/Movies"
import { NavBar } from "../components/NavBar"
import { FetchGenresDocument, FetchGenresQuery, useFetchGenresQuery } from "../generated/graphql"


type StateInit = {
  genres: number[]
}

const Index = () => {
  
  
  const [selectedGenres, setSelectGenres] = useState<StateInit>({
    genres: []
  })

  
  const {data: genreData} = useFetchGenresQuery()

  const updateChanges = (e: React.ChangeEvent<HTMLInputElement>, genreId: number) => {
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
    <>
      <Head>
        <title>eMovies</title>
      </Head>
      <Container minH="100vh">
        <NavBar />
        <LaptopWrapper>
          <Flex mt="100px" maxW='1280px' flexDir="row" >
            <Grid templateColumns={["1fr", "1fr", "1fr 3fr"]} gap={4}>
              <GridItem d={['none', 'none', "flex"]} w="100%" >
                <Flex flexDir="column" align="flex-start" justify="flex-start" >
                <VStack my={4} display="flex" alignItems="flex-start" justifyContent="flex-start" >
                  {genreData?.fetchGenres.map(genre => (
                    <Checkbox key={genre.id} onChange={(e) => {
                      updateChanges(e, genre.id)
                    }} name="checkbox" size="lg" colorScheme="orange" textColor="gray.600" >{genre.name}</Checkbox>
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
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApolloClient()

  await apolloClient.query<FetchGenresQuery>({
    query: FetchGenresDocument
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1
  })
}

export default Index

